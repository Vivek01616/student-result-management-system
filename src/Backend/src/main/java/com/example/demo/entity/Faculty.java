
package com.example.demo.entity;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import java.util.List;
@Entity
public class Faculty {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String password;

    @OneToMany(mappedBy = "faculty", cascade = CascadeType.ALL)
    private List<MarkSheet> markSheets;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<MarkSheet> getMarkSheets() {
		return markSheets;
	}

	public void setMarkSheets(List<MarkSheet> markSheets) {
		this.markSheets = markSheets;
	}

	public Faculty(Long id, String password, List<MarkSheet> markSheets) {
		super();
		this.id = id;
		this.password = password;
		this.markSheets = markSheets;
	}

	public Faculty() {
		
	}

    // Getters and setters
}
