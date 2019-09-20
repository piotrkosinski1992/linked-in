package com.linkedin.auth.usecase;

import com.linkedin.auth.domain.User;
import com.linkedin.auth.usecase.gateways.RegisterCommandGateway;

public class RegisterUserUsecase implements RegisterUser
{
    private final RegisterCommandGateway registerCommandGateway;

    public RegisterUserUsecase(RegisterCommandGateway gateway)
    {
        registerCommandGateway = gateway;
    }

    @Override
    public void register(User user)
    {
        registerCommandGateway.register(user);
    }
}
