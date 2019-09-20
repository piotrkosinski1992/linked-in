package com.linkedin.auth.gateway;

import org.springframework.stereotype.Service;

import com.linkedin.auth.domain.User;
import com.linkedin.auth.gateway.repositories.UserRepository;
import com.linkedin.auth.usecase.gateways.RegisterCommandGateway;

@Service
public class DatabaseRepositoryGateway implements RegisterCommandGateway
{
    private final UserRepository userRepository;

    public DatabaseRepositoryGateway(UserRepository repository)
    {
        userRepository = repository;
    }

    @Override
    public void register(User user)
    {
        userRepository.save(user);
    }
}
