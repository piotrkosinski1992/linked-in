package com.linkedin.auth.domain;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class User {

    @EmbeddedId
    private EntityId id;

    @JsonProperty(value = "email")
    @Column(name = "EMAIL")
    private String credentialsEmail;

    @JsonProperty(value = "password")
    @Column(name = "PASSWORD")
    private String credentialsPassword;

    @JsonProperty(value = "repeatPassword")
    @Transient
    private String repeatCredentialsPassword;

    @Column(name = "ROLE")
    @Enumerated(EnumType.STRING)
    private Role role;

    @Column(name = "FIRST_NAME")
    private String firstName;

    @Column(name = "LAST_NAME")
    private String lastName;

    private User() {
        this.id = EntityId.create();
    }

    public User(String credentialsEmail, String credentialsPassword, Role role, String firstName, String lastName) {
        this.id = EntityId.create();
        this.credentialsEmail = credentialsEmail;
        this.credentialsPassword = credentialsPassword;
        this.role = role;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public EntityId getId() {
        return id;
    }

    public void setId(EntityId id) {
        this.id = id;
    }

    public String getCredentialsEmail() {
        return credentialsEmail;
    }

    public void setCredentialsEmail(String credentialsEmail) {
        this.credentialsEmail = credentialsEmail;
    }

    public String getCredentialsPassword() {
        return credentialsPassword;
    }

    public void setCredentialsPassword(String credentialsPassword) {
        this.credentialsPassword = credentialsPassword;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getRepeatCredentialsPassword()
    {
        return repeatCredentialsPassword;
    }

    public void setRepeatCredentialsPassword(String repeatCredentialsPassword)
    {
        this.repeatCredentialsPassword = repeatCredentialsPassword;
    }
}
