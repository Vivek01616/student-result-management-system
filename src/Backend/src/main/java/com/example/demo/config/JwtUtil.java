package com.example.demo.config;
import java.util.Base64;
import java.util.Date;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;
import org.springframework.security.core.userdetails.UserDetails;

@Component
public class JwtUtil {

    // Secret key used for signing the JWT, encoded in Base64
    private final String SECRET_KEY = Base64.getEncoder().encodeToString("mysecretkey".getBytes());

    /**
     * Generates a JWT token with the given subject and role.
     *
     * @param subject the username or user ID that is the subject of the token.
     * @param role    the role of the user (e.g., "ROLE_USER", "ROLE_ADMIN").
     * @return the generated JWT token as a String.
     */
    public String generateToken(String subject, String role) {
        return Jwts.builder()
                .setSubject(subject)  // Set the subject (typically the username)
                .claim("role", role)   // Add a custom claim for the user's role
                .setIssuedAt(new Date())  // Set the issued date to the current date
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10))  // Token validity: 10 hours
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)  // Sign the token with HS256 algorithm and encoded secret key
                .compact();  // Compact the JWT to a URL-safe string
    }

    /**
     * Extracts all claims from the given JWT token.
     *
     * @param token the JWT token from which to extract claims.
     * @return the claims (payload) of the JWT.
     */
    public Claims extractClaims(String token) {
        return Jwts.parser()
                .setSigningKey(Base64.getDecoder().decode(SECRET_KEY))  // Use the decoded secret key to parse the token
                .parseClaimsJws(token)  // Parse the token and get the claims
                .getBody();  // Return the claims body
    }

    /**
     * Extracts the username (subject) from the given JWT token.
     *
     * @param token the JWT token from which to extract the username.
     * @return the username as a String.
     */
    public String extractUsername(String token) {
        return extractClaims(token).getSubject();  // Get the subject (username) from the token
    }

    /**
     * Checks if the given JWT token is expired.
     *
     * @param token the JWT token to check.
     * @return true if the token is expired, false otherwise.
     */
    private boolean isTokenExpired(String token) {
        return extractClaims(token).getExpiration().before(new Date());  // Check if the token has expired
    }

    /**
     * Validates the given JWT token against the provided UserDetails.
     *
     * @param token       the JWT token to validate.
     * @param userDetails the user details to match with the token.
     * @return true if the token is valid, false otherwise.
     */
    public boolean validateToken(String token, UserDetails userDetails) {
        final String username = extractUsername(token);  // Extract username from the token
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));  // Validate username and expiration
    }
}
