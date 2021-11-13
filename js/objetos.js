"use strict";

function Biblioteca(){
    this.usuarios = [];
    this.articulos = [];
    this.prestamos = [];
}

Biblioteca.prototype.optionsLibros = function(){

    let sOptions = '<option value="-1">Ninguno</option>';

    for(let articulo of this.articulos){
        if (articulo.prestado == false){ // && articulo instanceof Libro){
            sOptions += '<option value="' + articulo.idArticulo + '">' + articulo.nombre + '</option>';
        }
    }

    return sOptions;
}

Biblioteca.prototype.optionsDVD = function(){

    let sOptions = '<option value="-1">Ninguno</option>';

    for(let articulo of this.articulos){ 
        if (articulo.prestado == false){ // && articulo instanceof DVD
            sOptions += '<option value="' + articulo.idArticulo + '">' + articulo.nombre + '</option>';
        }
    }

    return sOptions;
}