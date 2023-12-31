package com.todos.restfulwebservice;

import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins ="http://localhost:4200/")
@RestController
public class HelloWorldController {
    @RequestMapping(method = RequestMethod.GET,path="/hello-world")
    public String helloWorld() {
        return "Hello world";
    }

    @RequestMapping(method = RequestMethod.GET,path="/hello-world-bean")
    public HelloWorldBean helloWorldBean() {
        return new HelloWorldBean("Hello world");
    }

    @GetMapping(path="/hello-world-bean/{name}")
    public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
        return new HelloWorldBean(String.format("Hello world,%s",name));
    }
}
