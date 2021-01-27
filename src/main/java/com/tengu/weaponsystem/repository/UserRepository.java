package com.tengu.weaponsystem.repository;

import com.tengu.weaponsystem.entity.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.UUID;

@CrossOrigin("http://localhost:4200")
@Repository
public interface UserRepository extends CrudRepository<User, UUID> {

    @Query("SELECT u From User u where u.email = :email")
    User getUserForLogin(@Param("email") String email);
}
