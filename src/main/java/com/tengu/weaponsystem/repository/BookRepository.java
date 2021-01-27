package com.tengu.weaponsystem.repository;

import com.tengu.weaponsystem.entity.Book;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.UUID;

@CrossOrigin("http://localhost:4200")
@Repository
public interface BookRepository extends CrudRepository<Book,Long> {
    @Query("SELECT i" +
            " From Book i where i.name LIKE CONCAT('%',:title,'%')")
    Iterable<Book> findByNameContainigForMap(@Param("title") String title);

}
