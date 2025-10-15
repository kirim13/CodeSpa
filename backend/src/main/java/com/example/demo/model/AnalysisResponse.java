package com.example.demo.model;

public class AnalysisResponse {
    private String id;
    private String originalText;
    private String geminiResult;
    private String status;

    // Default constructor
    public AnalysisResponse() {
    }

    // Constructor with all fields
    public AnalysisResponse(String id, String originalText, String geminiResult, String status) {
        this.id = id;
        this.originalText = originalText;
        this.geminiResult = geminiResult;
        this.status = status;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getOriginalText() {
        return originalText;
    }

    public void setOriginalText(String originalText) {
        this.originalText = originalText;
    }

    public String getGeminiResult() {
        return geminiResult;
    }

    public void setGeminiResult(String geminiResult) {
        this.geminiResult = geminiResult;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
