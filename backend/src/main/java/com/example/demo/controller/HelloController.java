package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class HelloController {
        
    @GetMapping("/test")
    public String test() {
        return "Backend is working!";
    }
}