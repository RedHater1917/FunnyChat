package com.tengu.weaponsystem.controller;

import com.tengu.weaponsystem.entity.LogInForm;
import com.tengu.weaponsystem.entity.SignUpForm;
import com.tengu.weaponsystem.entity.User;
import com.tengu.weaponsystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "users")
public class UserController {
    @Autowired
    UserService userService;
    @Autowired
    PasswordEncoder encoder;

    @PostMapping("/login")
    public User signIn(@RequestBody LogInForm login){
        return this.userService.login(login);
    }
    @PostMapping("/signUp")
    public User signUp(@RequestBody SignUpForm signUp){
        User user = new User(
                UUID.randomUUID(),
                signUp.getFirstName(),
                signUp.getLastName(),
                User.Role.USER,
                signUp.getEmail(),
                encoder.encode(signUp.getPassword())
        );
        return this.userService.signUp(user);
    }
    @GetMapping("/get/")
    public Iterable<User> getAll(){
        return this.userService.getAll();
    }
    @GetMapping("/get/{userId}")
    public User getUser(@PathVariable UUID userId){
        return this.userService.getUser(userId);
    }
}
