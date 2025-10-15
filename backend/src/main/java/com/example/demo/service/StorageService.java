package com.example.demo.service;

import com.example.demo.model.AnalysisResponse;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class StorageService {
    // ConcurrentHashMap is thread-safe - multiple requests can access it simultaneously
    private final Map<String, AnalysisResponse> storage = new ConcurrentHashMap<>();

    /**
     * Save an analysis response with the given ID
     * @param id Unique identifier for the analysis
     * @param response The analysis response to store
     */
    public void save(String id, AnalysisResponse response) {
        storage.put(id, response);
    }

    /**
     * Retrieve an analysis response by ID
     * @param id The unique identifier
     * @return The stored AnalysisResponse, or null if not found
     */
    public AnalysisResponse get(String id) {
        return storage.get(id);
    }

    /**
     * Check if a result exists for the given ID
     * @param id The unique identifier
     * @return true if result exists, false otherwise
     */
    public boolean exists(String id) {
        return storage.containsKey(id);
    }

    /**
     * Get the number of stored results
     * @return The count of stored results
     */
    public int size() {
        return storage.size();
    }
}
