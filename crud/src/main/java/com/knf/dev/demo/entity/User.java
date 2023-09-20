package com.knf.dev.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "paciente")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long dpi;
    @Column(name = "nombres")
    private String nombres;
    @Column(name = "apellidos")
    private String apellidos;
    @Column(name = "fecha_nacimiento")
    private String fecha_nacimiento;
    @Column(name = "direccion")
    private String direccion;
    @Column(name = "numero_telefono")
    private String numero_telefono;
    @Column(name = "isActive")
    private int isActive;
     @Column(name = "correo")
    private String correo;
    @ManyToOne
    @JoinColumn(name = "id_municipio", referencedColumnName = "id")
    private Municipio  municipio;
    @ManyToOne
    @JoinColumn(name = "id_genero", referencedColumnName = "id")
    private Genero  genero;
    @ManyToOne
    @JoinColumn(name = "id_tipo_dpi", referencedColumnName = "id")
    private TipoDocumento  tipoDocumento;
     @ManyToOne
    @JoinColumn(name = "id_tipo_paciente", referencedColumnName = "id")
    private TipoPaciente  tipopaciente;

    public User() {
    }

    public User(String firstName, String lastName, String fecha_nacimiento, String direccion, String numero_telefono, String correo, Municipio municipio, Genero genero, TipoDocumento tipoDocumento, TipoPaciente tipopaciente, int isActive) {
        super();
        this.nombres = firstName;
        this.apellidos = lastName;
        this.fecha_nacimiento = fecha_nacimiento;
        this.direccion = direccion;
        this.numero_telefono = numero_telefono;
        this.correo = correo;
        this.municipio = municipio;
        this.genero = genero;
        this.tipoDocumento = tipoDocumento;
        this.tipopaciente = tipopaciente;
        this.isActive = isActive;
    }

    public long getDpi() {
        return dpi;
    }

    public void setDpi(long id) {
        this.dpi = id;
    }

    public String getNombres() {
        return nombres;
    }

    public void setNombres(String firstName) {
        this.nombres = firstName;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String lastName) {
        this.apellidos = lastName;
    }

    public String getFecha_nacimiento() {
        return fecha_nacimiento;
    }

    public void setFecha_Nacimiento(String emailId) {
        this.fecha_nacimiento = emailId;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getNumero_telefono() {
        return numero_telefono;
    }

    public void setNumero_Telefono(String numero_telefono) {
        this.numero_telefono = numero_telefono;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String emailId) {
        this.correo = emailId;
    }

    public Municipio getMunicipio() {
        return municipio;
    }

    public void setMunicipio(Municipio municipio) { this.municipio = municipio; }

    public Genero getGenero() {
        return genero;
    }

    public void setGenero(Genero genero) { this.genero = genero; }

    public TipoDocumento getTipoDocumento() {
        return tipoDocumento;
    }

    public void setTipoDocumento(TipoDocumento tipoDocumento) { this.tipoDocumento = tipoDocumento; }

    public TipoPaciente getTipopaciente() {
        return tipopaciente;
    }

    public void setTipopaciente(TipoPaciente tipopaciente) { this.tipopaciente = tipopaciente; }

    public int getIsActive() { return isActive; }

    public void setIsActive(int isActive) { this.isActive = isActive; }
}