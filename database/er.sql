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
    dpi BIGINT NOT NULL,
    nombres VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    id_tipo_dpi INT NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    id_genero INT NOT NULL,
    direccion VARCHAR(250) NOT NULL,
    id_municipio INT NOT NULL,
    numero_telefono BIGINT NOT NULL,
    correo VARCHAR(250) NOT NULL,
    id_tipo_paciente INT NOT NULL,
    PRIMARY KEY (dpi),
    FOREIGN KEY (id_genero) REFERENCES genero(id),
    FOREIGN KEY (id_tipo_paciente) REFERENCES id_tipo_paciente(id),
    FOREIGN KEY (id_municipio) REFERENCES municipio(id),
    FOREIGN KEY (id_tipo_dpi) REFERENCES tipo_dpi(id)
);

DROP TABLE paciente 

INSERT INTO master.dbo.tipo_dpi
(id, tipo)
VALUES(3, 'Pasaporte');

INSERT INTO master.dbo.departamento
(id, departamento)
VALUES(1, 'Guatemala');

INSERT INTO master.dbo.municipio
(id, municipio, id_departamento)
VALUES(1, 'Guatemala', 1);

INSERT INTO master.dbo.municipio
(id, municipio, id_departamento)
VALUES(2, 'Mixco', 1);

INSERT INTO master.dbo.municipio
(id, municipio, id_departamento)
VALUES(3, 'Villa Nueva', 1);

INSERT INTO master.dbo.id_tipo_paciente
(id, tipo_paciente)
VALUES(1, 'VIP');

INSERT INTO master.dbo.id_tipo_paciente
(id, tipo_paciente)
VALUES(2, 'Estandar');

INSERT INTO master.dbo.genero
(id, genero)
VALUES(1, 'Masculino');

INSERT INTO master.dbo.genero
(id, genero)
VALUES(2, 'Femenino');

INSERT INTO master.dbo.paciente
(dpi, nombres, apellidos, id_tipo_dpi, fecha_nacimiento, id_genero, direccion, id_municipio, numero_telefono, correo, id_tipo_paciente)
VALUES(334234324334, 'Gerardo', 'prueba', 1, '2022-01-10', 1, 'direccion', 1, 223, 'correo@mail.com', 1);