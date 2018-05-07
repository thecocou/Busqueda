/*jshint esversion: 6*/
window.onload = initBusqueda;
// Inciar el programa
function initBusqueda() {
    // Cargar los datos
    Busqueda = new Book()
    // mostrar la pagina
        .showImage()
        .showText();
    // chequear si se hizo click en los botones
    for (let n = 0; n < 2; n++) {
        Busqueda.button[n].onclick = function () {
            // cambiar pagina y mostrar nueva
            Busqueda.changePage(this.id)
                .showPageAnimation()
                .showImage()
                .showText();
        };
    }
}

class Book {
    // Cargo la informacion y variables
    constructor() {
        this.page = 2;
        this.firstPage = 2;
        this.lastPage = 125;
        this.button = document.getElementsByClassName('Boton');
        this.screen = document.getElementById('Contenido');
        this.text = document.getElementById('textos');
        this.animacion = document.getElementById('animatedLine');
        this.textos = cargarTextos();
    }

    // metodo para cambiar de pagina
    changePage(direction) {
        let self = this;
        // si hizo click en siguiente
        if (direction === "next" && self.page < self.lastPage) {
            self.page++;
        }
        // si hizo click en anterior
        if (direction === "previous" && self.page > self.firstPage) {
            self.page--;
        }
        return this;
    }
    
    // metodo para mostrar texto
    showText() {
        let self = this;
        self.text.innerHTML = "<p class='textosAnimados' >" + self.textos[self.page-2] + "</p>";
        return this;
    }

    // metodo para mostrar pagina
    showImage() {
        let self = this;
        setTimeout(function () {
            // actualizo la pagina que se muestra
            self.screen.innerHTML = "<img src='img/" + self.page + ".jpg' width='100%'>";
        }, 500);
        return this;
    }

    // metodo para mostrar animacion de pagina
    showPageAnimation() {
        let self = this;
        self.animacion.innerHTML = '<svg id="animacion" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1134 734.2"><path id="linea" class="lineaAnimada" d="M1303.8 367.1S957 484.6 584.4 373s-777.8-5.9-777.8-5.9" fill="none" stroke="#fff" stroke-width="856" stroke-miterlimit="10" /></svg >';
        return this;
    }
}

