package com.example.demo.controllers;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.config.JwtUtil;
import com.example.demo.entity.Faculty;
import com.example.demo.entity.Student;
import com.example.demo.service.FacultyService;
import com.example.demo.service.StudentService;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private StudentService studentService;

    @Autowired
    private FacultyService facultyService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login/students")
    public Student save(@RequestBody Student student) {
    	return studentService.saveStudent(student);
    	
    }

    @PostMapping("/login/student")
    public ResponseEntity<?> loginStudent(@RequestBody Student student) {
        Optional<Student> foundStudent = studentService.findByRollNo(student.getRollNo());
        if (foundStudent.isPresent()) {
            String token = jwtUtil.generateToken(student.getRollNo(), "STUDENT");
            return ResponseEntity.ok(new JwtResponse(token));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid roll number");
        }
    }
    @PostMapping("/login/faculty1")
    public Faculty save(@RequestBody Faculty faculty) {
    	return facultyService.saveFaculty(faculty);
    	
    }

    @PostMapping("/login/faculty")
    public ResponseEntity<?> loginFaculty(@RequestBody Faculty faculty) {
        Optional<Faculty> foundFaculty = facultyService.findByIdAndPassword(faculty.getId(), faculty.getPassword());
        if (foundFaculty.isPresent()) {
            String token = jwtUtil.generateToken(faculty.getId().toString(), "FACULTY");
            return ResponseEntity.ok(new JwtResponse(token));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid ID or password");
        }
    }
}
