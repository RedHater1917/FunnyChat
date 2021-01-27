package com.tengu.weaponsystem.service;

import com.tengu.weaponsystem.entity.LogInForm;
import com.tengu.weaponsystem.entity.SignUpForm;
import com.tengu.weaponsystem.entity.User;
import com.tengu.weaponsystem.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
@Transactional
public class UserServiceImpl implements UserService {
    @Autowired
    UserRepository userRepository;
    @Override
    public User login(LogInForm logInForm) {
        User user = this.userRepository.getUserForLogin(logInForm.getEmail());
        if(BCrypt.checkpw(logInForm.getPassword(), user.getPassword())){
            return user;
        }else{
            return null;
        }
    }

    @Override
    public User signUp(User user) {
        return this.userRepository.save(user);
    }

    @Override
    public Iterable<User> getAll() {
        return this.userRepository.findAll();
    }

    @Override
    public User getUser(UUID userId) {
        return this.userRepository.findById(userId).get();
    }
}
