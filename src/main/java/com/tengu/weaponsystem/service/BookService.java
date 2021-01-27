package com.tengu.weaponsystem.service;

import com.tengu.weaponsystem.entity.Book;

import java.util.Optional;

public interface BookService {

    Book save(Book book);

    Iterable<Book> findAll();

    Optional<Book> getBook(Long id);

    void delete(Long id);
    Iterable<Book> findByNameContainigForMap(String search);
}
