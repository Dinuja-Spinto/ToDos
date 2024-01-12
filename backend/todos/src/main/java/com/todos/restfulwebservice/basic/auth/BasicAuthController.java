package com.todos.restfulwebservice.basic.auth;

import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins ="http://localhost:4200/")
@RestController
public class BasicAuthController {
    @GetMapping(path="/basicAuth")
    public AuthenticationBean helloWorldBean() {
        return new AuthenticationBean("You are authenticated");
    }

}
