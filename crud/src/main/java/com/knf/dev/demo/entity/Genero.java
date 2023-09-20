package com.knf.dev.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "genero")
public class Genero {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "genero")
    private String genero;

    public Genero() {
    }

    public Genero(String muninicipio, int id) {
        super();
        this.genero = muninicipio;
        this.id = id;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String muninicipio) {
        this.genero = muninicipio;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
