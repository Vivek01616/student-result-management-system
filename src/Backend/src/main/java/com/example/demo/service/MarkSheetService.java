package com.example.demo.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Faculty;
import com.example.demo.entity.MarkSheet;
import com.example.demo.repo.MarkSheetRepository;

@Service
public class MarkSheetService {
    @Autowired
    private MarkSheetRepository markSheetRepository;

    public List<MarkSheet> getAllMarkSheets(Faculty faculty) {
        return markSheetRepository.findByFaculty(faculty);
    }

    public MarkSheet saveMarkSheet(MarkSheet markSheet) {
        return markSheetRepository.save(markSheet);
    }

    public void deleteMarkSheet(Long id) {
        markSheetRepository.deleteById(id);
    }
}
