package com.example.demo.controllers;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Faculty;
import com.example.demo.entity.MarkSheet;
import com.example.demo.service.MarkSheetService;

@RestController
@RequestMapping("/marksheets")
@PreAuthorize("hasRole('FACULTY')")
public class MarkSheetController {
    @Autowired
    private MarkSheetService markSheetService;

    @PostMapping
    public ResponseEntity<MarkSheet> addMarkSheet(@RequestBody MarkSheet markSheet) {
        MarkSheet savedMarkSheet = markSheetService.saveMarkSheet(markSheet);
        return ResponseEntity.ok(savedMarkSheet);
    }

    @GetMapping
    public ResponseEntity<List<MarkSheet>> getAllMarkSheets(@AuthenticationPrincipal Faculty faculty) {
        List<MarkSheet> markSheets = markSheetService.getAllMarkSheets(faculty);
        return ResponseEntity.ok(markSheets);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMarkSheet(@PathVariable Long id) {
        markSheetService.deleteMarkSheet(id);
        return ResponseEntity.noContent().build();
    }
}
