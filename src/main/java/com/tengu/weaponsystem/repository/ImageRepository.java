package com.tengu.weaponsystem.repository;

import java.util.Optional;

import com.tengu.weaponsystem.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin("http://localhost:4200")
@Repository
public interface ImageRepository extends CrudRepository<Image, Long> {

    @Query("SELECT w from Image w where w.name = :name")
    Optional<Image> findByName(@RequestParam("name") String name);
}