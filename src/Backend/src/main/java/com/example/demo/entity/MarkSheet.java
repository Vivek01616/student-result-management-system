package com.example.demo.entity;

import jakarta.persistence.*;

@Entity
public class MarkSheet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private int marks;
    
    @ManyToOne
    @JoinColumn(name = "student_id", nullable = false)
    private Student student;

    @ManyToOne
    @JoinColumn(name = "faculty_id", nullable = false)
    private Faculty faculty;

    // New One-to-One relationship with Subject
    @OneToOne
    @JoinColumn(name = "subject_id", nullable = false)
    private Subject subject;

    public MarkSheet() {
    }

    public MarkSheet(Long id, int marks, Student student, Faculty faculty, Subject subject) {
        this.id = id;
        this.marks = marks;
        this.student = student;
        this.faculty = faculty;
        this.subject = subject;
    }

    // Getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getMarks() {
        return marks;
    }

    public void setMarks(int marks) {
        this.marks = marks;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public Faculty getFaculty() {
        return faculty;
    }

    public void setFaculty(Faculty faculty) {
        this.faculty = faculty;
    }

    public Subject getSubject() {
        return subject;
    }

    public void setSubject(Subject subject) {
        this.subject = subject;
    }
}
