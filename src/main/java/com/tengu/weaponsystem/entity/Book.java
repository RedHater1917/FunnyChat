package com.tengu.weaponsystem.entity;



import javax.persistence.*;
import java.time.LocalDate;
import java.util.Set;

@Entity
@Table(name="Book")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name="name")
    private String name;

    @ManyToOne
    @JoinColumn(name="photo_id")
    private Image photo;

    @Column(name="description")
    private String description;

    @Column(name="year")
    private Integer year;

    @Column(name="izdat")
    private String izdat;

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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Image getPhoto() {
        return photo;
    }

    public void setPhoto(Image photo) {
        this.photo = photo;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public String getIzdat() {
        return izdat;
    }

    public void setIzdat(String izdat) {
        this.izdat = izdat;
    }
}
