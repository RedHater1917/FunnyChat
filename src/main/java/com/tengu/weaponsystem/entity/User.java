package com.tengu.weaponsystem.entity;

import lombok.AllArgsConstructor;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name="Users", uniqueConstraints = {
        @UniqueConstraint(columnNames = {
        "email"
    })
})
@AllArgsConstructor
public class User {
    public enum Role{
        ADMIN, USER;
        public static Role getById(String id){
            for(Role e : values()) {
                if(e.name().equalsIgnoreCase(id)) return e;
            }
            return USER;
        }
    };
    @Id
    @GeneratedValue
    @Column(name="id")
    private UUID id;
    @Column(name="firstName")
    private String firstName;
    @Column(name="lastName")
    private String lastName;
    @Column(name="role")
    private Role role;
    @Column(name="email")
    private String email;
    @Column(name="password")
    private String password;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Role getRole() {
        return role;
    }
    public void setRole(Role role) {
        this.role = role;
    }

    public User() { 
    }
}
