package com.tengu.weaponsystem.controller;


import com.tengu.weaponsystem.entity.Book;

import com.tengu.weaponsystem.entity.User;
import com.tengu.weaponsystem.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "books")
public class BookController {

    @Autowired
    private BookService bookService;


    @PostMapping("/save")
    public Book saveWeapon(@RequestBody Book book){
        return this.bookService.save(book);
    }
    @GetMapping("/get/")
    public Iterable<Book> getAll(){
        return this.bookService.findAll();
    }
    @GetMapping("/get/{bookId}")
    public Book getUser(@PathVariable Long bookId){
        return this.bookService.getBook(bookId).get();
    }
    @GetMapping("/search/{req}")
    public Iterable<Book> searchByContaining(@PathVariable(value = "req") String req){
            return this.bookService.findByNameContainigForMap(req);
    }
}
