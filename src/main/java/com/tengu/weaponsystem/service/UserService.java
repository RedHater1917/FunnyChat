package com.tengu.weaponsystem.service;

import com.tengu.weaponsystem.entity.LogInForm;
import com.tengu.weaponsystem.entity.SignUpForm;
import com.tengu.weaponsystem.entity.User;

import java.util.List;
import java.util.UUID;

public interface UserService {
    User login(LogInForm logInForm);
    User signUp(User User);
    Iterable<User> getAll();
    User getUser(UUID userId);
}
