package com.example.demo.repo;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Faculty;
import com.example.demo.entity.MarkSheet;

public interface MarkSheetRepository extends JpaRepository<MarkSheet, Long> {
    List<MarkSheet> findByFaculty(Faculty faculty);
}