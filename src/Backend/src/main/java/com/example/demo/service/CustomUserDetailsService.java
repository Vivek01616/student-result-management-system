package com.example.demo.service;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Faculty;
import com.example.demo.entity.Student;
import com.example.demo.repo.FacultyRepository;
import com.example.demo.repo.StudentRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private FacultyRepository facultyRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // First, try to load as a Student
        Optional<Student> studentOpt = studentRepository.findByRollNo(username);
        if (studentOpt.isPresent()) {
            return new org.springframework.security.core.userdetails.User(
                    studentOpt.get().getRollNo(),
                    "", // Students don't have passwords in this implementation
                    getAuthorities("ROLE_STUDENT"));
        }

        // If not found as a student, try to load as a Faculty
        try {
            Long facultyId = Long.parseLong(username);
            Optional<Faculty> facultyOpt = facultyRepository.findById(facultyId);
            if (facultyOpt.isPresent()) {
                Faculty faculty = facultyOpt.get();
                return new org.springframework.security.core.userdetails.User(
                        faculty.getId().toString(),
                        faculty.getPassword(),
                        getAuthorities("ROLE_FACULTY"));
            }
        } catch (NumberFormatException e) {
            // Handle cases where the username is not a number, which means it's not a Faculty ID
        }

        // If no user is found, throw exception
        throw new UsernameNotFoundException("User not found with username: " + username);
    }

    private Collection<? extends GrantedAuthority> getAuthorities(String role) {
        Collection<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(role));
        return authorities;
    }
}
