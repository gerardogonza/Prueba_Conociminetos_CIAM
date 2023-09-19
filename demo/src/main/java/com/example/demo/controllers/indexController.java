package com.example.demo.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.response.Response;

@RestController


public class indexController {
     @GetMapping("/")    
    //return json
    public Response index(){
        Response response=new Response("success",200,"helloo world");
        return response;
    }
}
