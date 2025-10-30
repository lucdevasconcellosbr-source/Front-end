CREATE TABLE Estudante (
     Matricula INT NOT NULL PRIMARY KEY,
     Nome VARCHAR(100) NOT NULL,
     Idioma VARCHAR (30) NOT NULL,
     Data_Nascimento DATE NOT NULL,
     Idade INT NOT NULL CHECK (Idade > 12),
     Sexo CHAR(1) NOT NULL,
     Endereço VARCHAR(150) NOT NULL,
     Telefone VARCHAR(20) NOT NULL,
     Email VARCHAR(100) NOT NULL
);
CREATE TABLE Turma (
     Cod_Turma INT NOT NULL PRIMARY KEY,
     Cod_Materia INT NOT NULL,
     Cod_Professor INT NOT NULL,
     Ano INT NOT NULL,
     FOREIGN KEY (Cod_Materia) REFERENCES Materia(Cod_Materia),
     FOREIGN KEY (Cod_Professor) REFERENCES Professor(Cod_Professor)
);