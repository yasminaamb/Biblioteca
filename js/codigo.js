// Variables globales
var oBiblioteca = new Biblioteca();
datosIniciales();

function datosIniciales(){
    oBiblioteca.articulos = [ 
        {idArticulo : 1 , nombre : "El Quijote", prestado: false},
        {idArticulo : 2 , nombre : "El Quijote II", prestado: false},
        {idArticulo : 3 , nombre : "El Quijote III", prestado: true},
        {idArticulo : 4 , nombre : "El Quijote IV", prestado: false},
        {idArticulo : 5 , nombre : "El Quijote V", prestado: false}
    ];
}

ocultarFormularios();

function ocultarFormularios() {
    frmListados.style.display = "none";
    frmAltaUsuario.style.display = "none";
    frmAltaArticulo.style.display = "none";
    frmAltaPrestamo.style.display = "none";
}

// Resgistro de eventos
document.querySelector("#mnuListados").addEventListener("click",gestionListados);
document.querySelector("#mnuAltaUsuario").addEventListener("click",gestionUsuarios);
document.querySelector("#mnuAltaArticulo").addEventListener("click",gestionArticulos);
document.querySelector("#mnuAltaPrestamo").addEventListener("click",gestionFormularios);
document.querySelector("#btnAceptarAltaPrestamo").addEventListener("click",aceptarAltaPrestamo, false);

// Gestion de listados
function gestionListados(){
    ocultarFormularios();
    frmListados.style.display = "block";
}

// Gestion de usuarios
function gestionUsuarios(){
    ocultarFormularios();
    frmAltaUsuario.style.display = "block";
}

// Gestion de articulos
function gestionArticulos(){
    ocultarFormularios();
    frmAltaArticulo.style.display = "block";
}

// Gestion de formulario
function gestionFormularios(oEvento){
    let oE = oEvento || window.event;

    if( oE.target.id == 'mnuAltaPrestamo'){
        
         ocultarFormularios();

        frmAltaPrestamo.style.display = "block";

        // Inicializar el formulario
        frmAltaPrestamo.lstLibros1.innerHTML = oBiblioteca.optionsLibros();
        frmAltaPrestamo.lstLibros2.innerHTML = frmAltaPrestamo.lstLibros1.innerHTML;
        frmAltaPrestamo.lstDVD1.innerHTML = oBiblioteca.optionsDVD();
        frmAltaPrestamo.lstDVD2.innerHTML = frmAltaPrestamo.lstDVD1.innerHTML;

    }
}

function aceptarAltaPrestamo(){

    if (validarAltaPrestamo()){
        // Construir un objeto prestamo
        let idPrestamo = parseInt(frmAltaPrestamo.txtIdPrestamo.value.trim());
        let oArticulos = [];
        if (parseInt(frmAltaPrestamo.lstLibro1.value.trim()) != -1 ){
            oArticulos.push(oBiblioteca.buscarArticuloPorId(parseInt(frmAltaPrestamo.lstLibro1.value.trim())));
        }
        if (parseInt(frmAltaPrestamo.lstLibros2.value.trim()) != -1 ){
            oArticulos.push(oBiblioteca.buscarArticuloPorId(parseInt(frmAltaPrestamo.lstLibro2.value.trim())));
        }
        if (parseInt(frmAltaPrestamo.lstDVD1.value.trim()) != -1 ){
            oArticulos.push(oBiblioteca.buscarArticuloPorId(parseInt(frmAltaPrestamo.lstDVD1.value.trim())));
        }
        if (parseInt(frmAltaPrestamo.lstDVD2.value.trim()) != -1 ){
            oArticulos.push(oBiblioteca.buscarArticuloPorId(parseInt(frmAltaPrestamo.lstDVD2.value.trim())));
        }
        // Usuario
        let idUsuario = parseInt(frmAltaPrestamo.txtIdUsuario.value.trim());

        let oUsuario = oBiblioteca.buscarUsuario(idUsuario);

        // Fechas 
        let dtFechaInicio = new Date(frmPrestamo.txtFechaInicio.value);
        let dtFechaFin = new Date(frmPrestamo.txtFechaInicio.value);

        // Construyo el objeto
        let oPrestamo = new Prestamo(idPrestamo,oArticulos,oUsuario,dtFechaInicio,dtFechaFin);

        // Llamar al método de Biblioteca --> altaPrestamo

        sResultado = oBiblioteca.altaPrestamo(oPrestamo);

    }

}

function validarAltaPrestamo(){

    return true;
}