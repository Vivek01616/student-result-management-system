package com.example.demo.service;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Faculty;
import com.example.demo.repo.FacultyRepository;

@Service
public class FacultyService {
    @Autowired
    private FacultyRepository facultyRepository;

    public Optional<Faculty> findByIdAndPassword(Long id, String password) {
        return facultyRepository.findByIdAndPassword(id, password);
    }
    public Faculty saveFaculty(Faculty faculty){
        return facultyRepository.save(faculty);
    }
}
