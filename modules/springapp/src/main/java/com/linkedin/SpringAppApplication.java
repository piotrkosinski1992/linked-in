package com.linkedin;

import com.linkedin.auth.Role;
import com.linkedin.auth.User;
import com.linkedin.auth.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class SpringAppApplication implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public static void main(String[] args) {
        SpringApplication.run(SpringAppApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        userRepository.save(new User("foo", passwordEncoder.encode("foo"), Role.ADMIN, "Piotr", "ZBackendu"));
    }
}
