package com.todos.restfulwebservice.basic.auth;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.ws.config.annotation.WsConfigurerAdapter;
@Configuration
@EnableWebSecurity
public class SpringSecurityConfigBasicAuth extends WsConfigurerAdapter {

    protected void configure(HttpSecurity http) throws Exception{
      //  http.csrf().disable().antMatchers(HttpMethod.OPTIONS,"/**").any;
    }
}
