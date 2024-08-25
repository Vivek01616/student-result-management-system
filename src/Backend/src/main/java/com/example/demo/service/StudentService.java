package com.example.demo.service;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Faculty;
import com.example.demo.entity.Student;
import com.example.demo.repo.StudentRepository;

@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;

    public Optional<Student> findByRollNo(String rollNo) {
        return studentRepository.findByRollNo(rollNo);
    }
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

}
