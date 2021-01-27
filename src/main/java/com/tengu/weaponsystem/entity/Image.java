package com.tengu.weaponsystem.entity;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "images")
public class Image {

    public Image() {
        super();
    }

    public Image(Long id,String name, String type, byte[] pic) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.pic = pic;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "type")
    private String type;

    //image bytes can have large lengths so we specify a value
    //which is more than the default length for picByte column
    @Column(name = "pic", length = 1000)
    private byte[] pic;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public byte[] getPicByte() {
        return pic;
    }

    public void setPicByte(byte[] picByte) {
        this.pic = picByte;
    }
}