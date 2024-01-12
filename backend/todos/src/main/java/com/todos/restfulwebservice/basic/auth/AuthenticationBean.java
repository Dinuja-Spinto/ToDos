package com.todos.restfulwebservice.basic.auth;

public class AuthenticationBean {
    private String message;

    public AuthenticationBean(String msg) {
        this.message = msg;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    @Override
    public String toString() {
        return "HelloWorldBean{" +
                "message='" + message + '\'' +
                '}';
    }
}
