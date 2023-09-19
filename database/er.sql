CREATE TABLE departamento (
    id INT NOT NULL PRIMARY KEY,
    departamento VARCHAR(100) NOT NULL
);

CREATE TABLE municipio (
    id INT NOT NULL PRIMARY KEY,
    municipio VARCHAR(MAX) NOT NULL,
    id_departamento INT NOT NULL,
    FOREIGN KEY (id_departamento) REFERENCES departamento(id)
);


CREATE TABLE genero (
    id INT NOT NULL PRIMARY KEY,
    genero VARCHAR(30) NOT NULL
);

CREATE TABLE id_tipo_paciente (
    id INT NOT NULL PRIMARY KEY,
    tipo_paciente VARCHAR(100) NOT NULL
);


CREATE TABLE tipo_dpi (
    id INT NOT NULL PRIMARY KEY,
    tipo VARCHAR(50) NOT NULL
);

CREATE TABLE paciente (
    dpi INT NOT NULL,
    nombres VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    id_tipo_dpi INT NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    id_genero INT NOT NULL,
    direccion VARCHAR(250) NOT NULL,
    id_municipio INT NOT NULL,
    numero_telefono INT NOT NULL,
    correo VARCHAR(250) NOT NULL,
    id_tipo_paciente INT NOT NULL,
    municipio_id INT NOT NULL,
    PRIMARY KEY (dpi),
    FOREIGN KEY (id_genero) REFERENCES genero(id),
    FOREIGN KEY (id_tipo_paciente) REFERENCES id_tipo_paciente(id),
    FOREIGN KEY (municipio_id) REFERENCES municipio(id),
    FOREIGN KEY (id_tipo_dpi) REFERENCES tipo_dpi(id)
);

