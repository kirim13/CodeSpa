package com.example.demo.model;

public class AnalysisRequest {
    private String text;

    // Default constructor (required by Spring)
    public AnalysisRequest() {
    }

    // Constructor with parameters
    public AnalysisRequest(String text) {
        this.text = text;
    }

    // Getter - Spring uses this to read the field when converting to JSON
    public String getText() {
        return text;
    }

    // Setter - Spring uses this to populate the field when converting from JSON
    public void setText(String text) {
        this.text = text;
    }
}
