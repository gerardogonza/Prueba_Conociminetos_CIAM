package com.knf.dev.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "id_tipo_paciente")
public class TipoPaciente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "tipo_paciente")
    private String tipo_paciente;

    public TipoPaciente() {
    }

    public TipoPaciente(String muninicipio, int id) {
        super();
        this.tipo_paciente = muninicipio;
        this.id = id;
    }

    public String getTipo_paciente() {
        return tipo_paciente;
    }

    public void setTipo_paciente(String muninicipio) {
        this.tipo_paciente = muninicipio;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
