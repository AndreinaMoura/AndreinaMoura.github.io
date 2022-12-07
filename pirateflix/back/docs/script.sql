DROP DATABASE IF EXISTS pirateflix;
CREATE DATABASE pirateflix CHARSET= UTF8 COLLATE UTF8_GENERAL_CI;
USE pirateflix;

CREATE TABLE filmes(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(30) NOT NULL,
    lancamento VARCHAR(5) NOT NULL,
    cartaz VARCHAR(15) NOT NULL,
    imagem VARCHAR(1000) NOT NULL
);

LOAD DATA INFILE 'C:/Users/Andreina/Desktop/SENAI/AndreinaMoura.github.io/pirateflix/back/docs/database/filmes.csv'
INTO TABLE filmes
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '/r/n'
IGNORE 1 ROWS;

