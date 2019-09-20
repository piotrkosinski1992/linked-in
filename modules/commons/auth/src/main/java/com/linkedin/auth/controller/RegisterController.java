package com.linkedin.auth.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.linkedin.auth.domain.User;
import com.linkedin.auth.usecase.RegisterUser;

@RestController
public class RegisterController
{
    private final RegisterUser registerUser;

    public RegisterController(RegisterUser user)
    {
        registerUser = user;
    }

    @PostMapping("/register")
    public void register(@RequestBody User user)
    {
        registerUser.register(user);
    }
}
