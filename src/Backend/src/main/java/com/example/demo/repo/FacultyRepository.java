package com.example.demo.repo;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Faculty;

public interface FacultyRepository extends JpaRepository<Faculty, Long> {
    Optional<Faculty> findByIdAndPassword(Long id, String password);
}