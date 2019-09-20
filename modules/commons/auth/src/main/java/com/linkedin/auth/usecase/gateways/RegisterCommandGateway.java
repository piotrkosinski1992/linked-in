package com.linkedin.auth.usecase.gateways;

import com.linkedin.auth.domain.User;

public interface RegisterCommandGateway
{
    void register(User user);
}
