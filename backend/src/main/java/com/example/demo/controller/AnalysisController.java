package com.example.demo.controller;

import com.example.demo.model.AnalysisRequest;
import com.example.demo.model.AnalysisResponse;
import com.example.demo.service.GeminiService;
import com.example.demo.service.StorageService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.UUID;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class AnalysisController {

    private final GeminiService geminiService;
    private final StorageService storageService;

    /**
     * Constructor - Spring automatically injects the services
     * @param geminiService Service for calling Gemini API
     * @param storageService Service for storing results
     */
    public AnalysisController(GeminiService geminiService, StorageService storageService) {
        this.geminiService = geminiService;
        this.storageService = storageService;
    }

    /**
     * POST /api/analyze - Analyzes text using Gemini API
     * @param request Contains the text to analyze
     * @return AnalysisResponse with ID and Gemini's result
     */
    @PostMapping("/analyze")
    public AnalysisResponse analyze(@RequestBody AnalysisRequest request) {
        // Generate unique ID for this analysis
        String id = UUID.randomUUID().toString();

        // Call Gemini API to analyze the text
        String geminiResult = geminiService.analyze(request.getText());

        // Create response object
        AnalysisResponse response = new AnalysisResponse();
        response.setId(id);
        response.setOriginalText(request.getText());
        response.setGeminiResult(geminiResult);
        response.setStatus("completed");

        // Store the result in memory
        storageService.save(id, response);

        // Return response to frontend (Spring converts to JSON automatically)
        return response;
    }

    /**
     * GET /api/result/{id} - Retrieves a previously stored analysis result
     * @param id The unique identifier for the analysis
     * @return The stored AnalysisResponse
     */
    @GetMapping("/result/{id}")
    public AnalysisResponse getResult(@PathVariable String id) {
        // Retrieve result from storage
        AnalysisResponse response = storageService.get(id);

        // If not found, return 404 error
        if (response == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Result not found for ID: " + id);
        }

        // Return the stored result (Spring converts to JSON)
        return response;
    }
}
