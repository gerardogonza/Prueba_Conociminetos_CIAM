package com.knf.dev.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "municipio")
public class Municipio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "municipio")
    private String municipio;

    public Municipio() {
    }

    public Municipio(String muninicipio, int id) {
        super();
        this.municipio = muninicipio;
        this.id = id;
    }

    public String getMunicipio() {
        return municipio;
    }

    public void setMunicipio(String muninicipio) {
        this.municipio = muninicipio;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
