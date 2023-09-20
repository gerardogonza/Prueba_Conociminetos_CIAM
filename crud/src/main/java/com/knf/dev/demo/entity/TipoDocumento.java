package com.knf.dev.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "tipo_dpi")
public class TipoDocumento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "tipo")
    private String tipo;

    public TipoDocumento() {
    }

    public TipoDocumento(String muninicipio, int id) {
        super();
        this.tipo = muninicipio;
        this.id = id;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String muninicipio) {
        this.tipo = muninicipio;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
