package com.linkedin.auth.gateway.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.linkedin.auth.domain.EntityId;
import com.linkedin.auth.domain.User;

public interface UserRepository extends JpaRepository<User, EntityId> {

    User findByCredentialsEmail(String email);
}
