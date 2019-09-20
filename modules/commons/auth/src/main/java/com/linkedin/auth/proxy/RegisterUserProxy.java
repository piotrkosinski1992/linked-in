package com.linkedin.auth.proxy;

import org.springframework.stereotype.Service;

import com.linkedin.auth.domain.User;
import com.linkedin.auth.usecase.RegisterUser;
import com.linkedin.auth.usecase.RegisterUserUsecase;
import com.linkedin.auth.usecase.gateways.RegisterCommandGateway;

@Service
public class RegisterUserProxy implements RegisterUser
{
    private final RegisterUser registerUser;

    public RegisterUserProxy(RegisterCommandGateway registerCommandGateway)
    {
        this.registerUser = new RegisterUserUsecase(registerCommandGateway);
    }

    @Override
    public void register(User user)
    {
        registerUser.register(user);
    }
}
