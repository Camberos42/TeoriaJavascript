/* **********     Curso JavaScript: 60. WEB APIs - #jonmircha     ********** */
/*
        console.log(window);
        console.log(window.document);

        //API para generar un audio 
        let texto = "Hola amigos, soy chambers"
        const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto))
        hablar(texto);
        */


/* **********     Curso JavaScript: 61. DOM: Introducción - #jonmircha     ********** */
console.log("**************Elementos del documento**************")
console.log(document);
console.log(document.head); //Acceder al head
console.log(document.body); //Acceder al body
console.log(document.documentElement); //Acceder a todo el html
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
console.log(document.links); //Retorna un tipo de array con todos los enlaces
console.log(document.images); //Retorna un tipo de array con todos las imagenes
console.log(document.forms); //Retorna un tipo de array con todos los formularios
console.log(document.styleSheets); //Retorna un tipo de array cuantas hojas de estilo
console.log(document.scripts); //Retorna un tipo de array con todos  los scripts
setTimeout(() => {
    console.log(document.getSelection().toString()); //Selecciona una parte del html
}, 3000);

document.write("<h2>Hola chambers!</h2>");

/* **********     Curso JavaScript: 62. DOM: Nodos, Elementos y Selectores - #jonmircha     ********** */

console.log(document.getElementsByTagName("li")); //Trae todos los elementos del ese tipo de selector
console.log(document.getElementsByClassName("card")); //Traer todos los elementos de esa clase
console.log(document.getElementsByName("nombre")); //Trae todos los elementos de ese nombre 
console.log(document.getElementById("menu")); //Trae un elemento del id

console.log(document.querySelector("#menu")); //Selector para traer un selector/id/clase 
console.log(document.querySelector("a")); //Trae el primer selector del tipo especificado ("a)"
console.log(document.querySelectorAll("a")); //Trae todos los elementos de ese tipo de selector
console.log(document.querySelectorAll("a").length); //El numero de elementos de un tipo de selector en especifico
document.querySelectorAll("a").forEach((el) => console.log(el)); //Imprime cada elemento con un foreach
console.log(document.querySelector(".card")); //Seleccionar primer elemento de una clase
console.log(document.querySelectorAll(".card")); //Seleccionar todos elementos de una clase
console.log(document.querySelectorAll(".card")[2]); //Seleccionar un elemento de una posicion en especifico de una clase
console.log(document.querySelectorAll("#menu li")); //Seleccionar Todos los li del elemento con id = menu
console.log(document.querySelector("#menu li")); //Seleccionar primer li del elemento con id = menu


/* **********     Curso JavaScript: 63. DOM: Atributos y Data-Attributes - #jonmircha     ********** */

console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang")); //Usando el metodo .getAttribute
console.log(document.querySelector(".link-dom").href); //Trae toda la url http://127.0.0.1:5500/dom.html
console.log(document.querySelector(".link-dom").getAttribute("href")); //Retorna solo dom.html

document.documentElement.lang = "en"; //Asignarle un valor al atributo lang
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-MX") //Establecer un valor al atributo lang
console.log(document.documentElement.lang);

//Guardar en variables y agregarle atributos
const $linkDOM = document.querySelector(".link-dom"); //Guardar en una variable un selector para su posterior modificacion
$linkDOM.setAttribute("target", "_blank"); //Agregarle la propiedad de target con el valor de _blank (abrirlo en otra pagina )
$linkDOM.setAttribute("rel", "noopener"); //Medida de seguridad
$linkDOM.setAttribute("href", "https://platzi.com/datos/"); //Modificar el href (pagina que abrira)
console.log($linkDOM.hasAttribute("rel"));

//Data Atributtes
console.log($linkDOM.getAttribute("data-description")); //Trae el texto de ese atributo
console.log($linkDOM.dataset); //Ver la info de forma de mapa
console.log($linkDOM.dataset.description); //Alternativa para traer el texto de ese atributo
$linkDOM.setAttribute("data-description", "Modelo de Objeto del documento"); //Modificar el valor del data-description
console.log($linkDOM.dataset.description); //Ver el nuevo valor
$linkDOM.dataset.description = "Toma un curso en Platzi";
console.log($linkDOM.dataset.description);
console.log($linkDOM.hasAttribute("data-id")); //Verificar si tiene un atributo
console.log($linkDOM.removeAttribute("data-id")); //Remover un atributo
console.log($linkDOM.hasAttribute("data-id")); //Comprobar si se elimino el atributo


/* **********     Curso JavaScript: 64. DOM: Estilos y Variables CSS - #jonmircha     ********** */

const $linkDOM = document.querySelector(".link-dom");
console.log($linkDOM.style); //Nos trae todas las propiedades del style
console.log($linkDOM.getAttribute("style")); //Nos trae solo las prpiedades que le asignamos a selector style
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM)); //Nos trae todas las propiedades en un objeto
console.log(getComputedStyle($linkDOM).getPropertyValue("color")); //Acceder al valor de una sola propiedad

//Darle estilo a un elemento con propiedades de css
$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

console.log("------------------------------")
console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(getComputedStyle($linkDOM));

//Variables CSS - Custom Properties CSS
const $html = document.documentElement,
    $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
    varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color"); //Se Accede a la variable css como en color

console.log(varDarkColor, varYellowColor); //Acceder a las variables del css



$body.style.backgroundColor = varDarkColor; //Accedioendo a las variables se pueden manipular el valor del color 
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color", "green");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"); //Se asigna el nuevo valor del color a la variable
$body.style.setProperty("background-color", varDarkColor); //Nuevo color agregando la variable que contiene el nuevo color


/* **********     Curso JavaScript: 65. DOM: Clases CSS - #jonmircha     ********** */
const $card = document.querySelector(".card");
console.log($card);
console.log($card.className); //Nombre de la clase 
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");
console.log($card.classList);
console.log($card.className);
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45")); //Verifica si se encunetra una clase 
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45", "rotate-135"); //rempplaza clases 
$card.classList.add("opacity-80", "sepia");
$card.classList.remove("opacity-80", "sepia");
$card.classList.toggle("opacity-80", "sepia");


/* **********     Curso JavaScript: 66. DOM: Texto y HTML - #jonmircha     ********** */
const $whatIsDOM = document.getElementById("que-es");
let text = `
    <p>
      El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
    </p>
    <p>
      Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
      <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
  `;

//$whatIsDOM.innerText = text; //No indenta ni reconoce etiquetas
//$whatIsDOM.textContent = text; //Ya lo indenta pero ni reconoce etiquetas
$whatIsDOM.innerHTML = text; //Indenta y reconoce etiquetas
//$whatIsDOM.outerHTML = text; //Reemplazar el elemento del dom por el contenido del texto  (Se usa en React)



/* **********     Curso JavaScript: 67. DOM Traversing: Recorriendo el DOM - #jonmircha     ********** */
const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.children); //Hcer referencia a todos los hijos
console.log($cards.children[2]) ///Hcer referencia a un hijo en especifico
console.log($cards.parentElement); //Elemento padre
console.log($cards.firstElementChild); //primer Elemento hijo (no usar solo solo firstchild porque sera un espacio ya que hace referencia a un nodo)
console.log($cards.lastElementChild); //Ultimo  elemento hijo
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
console.log($cards.closest("div")); //Metodo que busca el asenstro (padre) mas cercano
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section"));
1 = "1"
console.log(1);



/* **********     Curso JavaScript: 68. DOM: Creando Elementos y Fragmentos - #jonmircha     ********** */
const $figure = document.createElement("figure"), //Crear un elemento nuevos
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption"),
    $figcaptionText = document.createTextNode("Animals"),
    $cards = document.querySelector(".cards"),
    $figure2 = document.createElement("figure");

//Agregarle los atributos a la imagen
$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");
//Agregarle la clase ded card para que tome los estilos de esa dicha clase
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText); //Se le agregan los elementos hijos a figcaption
$figure.appendChild($img); //Se le agregan los elementos hijos a figure
$figure.appendChild($figcaption);
$cards.appendChild($figure); //Se agrega el elemento creado figure (nodo Hijo) a la clase cards

//Forma #2 de crear un elemento  hijo
$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people" alt="People">
<figcaption>People</figcaption>
`;
$figure2.classList.add("card");
$cards.appendChild($figure2);

//Agregar elementos de un arreglo dinamicamente
const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
    $ul = document.createElement("ul");

//Insertar como elemento hijo dentro del body (como padre)
document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul);

//Recorrer elementos del array 
estaciones.forEach((el) => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
});

//Forma #2 de añadir dinamicamente varios elementos (con innerHTML)
const continentes = ["África", "América", "Asia", "Europa", "Oceanía"],
    $ul2 = document.createElement("ul");

document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = ""; //Se debe inicializar con una cadena vacia
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`)); //Se ira concatenando cada elemento (+=)

//Forma #3 y mas optima para agregar elementos dinamicamente utilizando fragmentos
const meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ],
    $ul3 = document.createElement("ul"),
    $fragment = document.createDocumentFragment(); //Metodo para crear un fragmento

meses.forEach((el) => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li); //Se agrega como nodo hijo el elemento fragmento. 
});

document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);


/* **********     Curso JavaScript: 69. DOM: Templates HTML - #jonmircha     ********** */
const $cards = document.querySelector(".cards"),
    $template = document.getElementById("template-card").content, //Acceder al contenido
    $fragment = document.createDocumentFragment(),
    cardsContent = [{
            title: "Tecnología",
            img: "https://placeimg.com/200/200/tech",
        },
        {
            title: "Animales",
            img: "https://placeimg.com/200/200/animals",
        },
        {
            title: "Arquitectura",
            img: "https://placeimg.com/200/200/arch",
        },
        {
            title: "Gente",
            img: "https://placeimg.com/200/200/people",
        },
        {
            title: "Naturaleza",
            img: "https://placeimg.com/200/200/nature",
        },
    ];

//Recorrer los objetos dentro del array de cardContent
cardsContent.forEach((el) => {
    $template.querySelector("img").setAttribute("src", el.img); //Establecer el valor de src añadiendole el valor de la key img
    $template.querySelector("img").setAttribute("alt", el.title); //Establecer el valor de src añadiendole el valor de la key title
    $template.querySelector("figcaption").textContent = el.title; //Añadir el valor de title a figcaption
    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
});

$cards.appendChild($fragment);


/* **********     Curso JavaScript: 70. DOM: Modificando Elementos (Old Style) - #jonmircha     ********** */
const $cards = document.querySelector(".cards");
$newCard = document.createElement("figure"),
    $cloneCards = $cards.cloneNode(true);

$newCard.innerHTML = `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption>Any</figcaption>
  `;

$newCard.classList.add("card");

//$cards.replaceChild($newCard, $cards.children[2]); //Remplaza elemento (param1 = nuevo elemento param2 = elemento viejo)
//$cards.removeChild($cards.lastElementChild); //Elimina elemento 
//$cards.insertBefore($newCard, $cards.firstElementChild); //Inserta un elemento
document.body.appendChild($cloneCards);


/* **********     Curso JavaScript: 71. DOM: Modificando Elementos (Cool Style/modo moderno) - #jonmircha     ********** */
/*
.insertAdjacent...
  .insertAdjacentElement(position, el) //Viene siendo un appendChild
  .insertAdjacentHTML(position, html) //Viene siendo un innerHTML (inserta codigo html)
  .insertAdjacentText(position, text)  //Viene siendo un textContent
  */


/*
Posiciones:
beforebegin(hermano anterior) //Antes del elemento que se pone como referencia
afterbegin(primer hijo) //Primer elemento hijo del nodo que se tome como referencia
beforeend(ultimo hijo)
afterend(hermano siguiente)
*/
const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure");

let $contenCard = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption></figcaption>
`;
$newCard.classList.add("card");

$newCard.insertAdjacentHTML("afterbegin", $contenCard);
//$cards.insertAdjacentElement("beforeend", $newCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");


//Herramientas que usa Jquery
$cards.prepend($newCard); //Agrega(hijo primero del nodo)
$cards.append($newCard); //Ultimo hijo del nodo (cards)
//$cards.before($newCard); //Agrega antes del nodo (card) como hermano
//$cards.after($newCard); //Agrega despues del nodo (card) como hermano




/* **********     Curso JavaScript: 72. DOM: Manejadores de Eventos - #jonmircha y Curso JavaScript: 73. DOM: Eventos con Parámetros y Remover Eventos - #jonmircha     ********** */
/*
Los eventos son los mecanismos que tenemos en JavaScript para controlar las acciones del usuario y definir el comportamiento del documento en cierto momento o cuando se cumplan ciertas condiciones.

Las funciones que se ejecutan en un evento se llaman Event Handler (Manejador de Eventos).

Existen los manejadores semanticos y los multiples.

https://developer.mozilla.org/en-US/docs/Web/Events
*/

function holaMundo() {
    alert("Hola Mundo");
    console.log(event);
}

function saludar(nombre = "Desconocid@") {
    alert(`Hola ${nombre}`);
    console.log(event);
}

//Evento semantico se accede al boton por medio del id, 
const $eventoSemantico = document.getElementById("evento-semantico"),
    $eventoMultiple = document.getElementById("evento-multiple");
//$eventoRemover = document.getElementById("evento-remover");

//Se puede llamar a la funcion asignandosela a la variable y usando el metodo .onclik
$eventoSemantico.onclick = holaMundo;
//Se puede asignar a una arrow funct o a una funct anonima (hara caso a la ultima funcion asignada , es decir ignora al holaMundo)
//Es decir solo se puede usar una sola funcion //Se puede usar como parametro el objeto Event
$eventoSemantico.onclick = function(e) {
    alert("Hola Mundo Manejador de Eventos Semántico");
    console.log(e);
    console.log(event);
};

//addEventListener- se aceptan dos parametros (desaparece el onclik) 
//Se pueden agregar varias funciones
$eventoMultiple.addEventListener("click", holaMundo);

//Usando una arrow funcion como parametro 
$eventoMultiple.addEventListener("click", (e) => {
    alert("Hola Mundo Manejador de Eventos Múltiple");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(event);
});

//No acepta el aprametro Nombre
//$eventoMultiple.addEventListener("click", saludar);

//D eesta forma si acepta el parametro nombre 
$eventoMultiple.addEventListener("click", () => {
    saludar();
    saludar("Jon");
});

//Remover eventos (parametro dbclik)
const removerDobleClick = (e) => {
    alert(`Removiendo el evento de tipo ${e.type}`);
    console.log(e);
    $eventoRemover.removeEventListener("dblclick", removerDobleClick);
    $eventoRemover.disabled = true;
};

$eventoRemover.addEventListener("dblclick", removerDobleClick);




/* **********     Curso JavaScript: 74. DOM: Flujo de Eventos (Burbuja y Captura) - #jonmircha     ********** */
/*
Si no se especifica el parámetro boolean, el valor por defecto es false.
  Si el boolean es falso se ejecuta la fase de burbuja (ir del elemento más interno al más externo <body>)
  Si el boolean es verdadero se ejecuta la fase de captura (ir del elemento más externo <body> al más interno)
*/
const $divsEventos = document.querySelectorAll(".eventos-flujo div");

function flujoEventos(e) {
    console.log(
        `Hola te saluda ${this.className}, el click lo originó ${e.target.className}`
    );
}
console.log($divsEventos);

//Se puede observar la propagacion (click en div 1 = 1 , div 2 = 3 (2+1), div 3 = 6(2+1+3))
$divsEventos.forEach(div => {
    //Fase de burbuja (3er parametro con false)
    //div.addEventListener("click", flujoEventos);
    div.addEventListener("click", flujoEventos, false);
    //Fase de captura
    div.addEventListener("click", flujoEventos, true);

    div.addEventListener("click", flujoEventos, {
        capture: false, //Si es true se activa modo captura
        once: true, //Solo se ejecuta una vez 
    });

});




const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
    $linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e) {
    console.log(
        `Hola te saluda ${this.className}, el click lo originó ${e.target.className}`
    );
    e.stopPropagation();
}

console.log($divsEventos);

$divsEventos.forEach((div) => {
    //Fase de burbuja
    div.addEventListener("click", flujoEventos);
    //div.addEventListener("click", flujoEventos, false);
    //Fase de captura
    //div.addEventListener("click", flujoEventos, true);
    //div.addEventListener("click", flujoEventos, {
    //capture: false,
    //once: true,
    //});
});

$linkEventos.addEventListener("click", (e) => {
    alert("Hola soy tu amigo y docente digital... Jonathan MirCha");
    e.preventDefault();
    e.stopPropagation();
});



/* **********     Curso JavaScript: 76. DOM: Delegación de Eventos - #jonmircha     ********** */
//Con la delegacion ya se elimina el foreach para asignar un eventlisteners para cada click . Mejora rendimineto a nivel memoria y recursos
//Se utiliza en peticiones asincronas (ajax y fetch) //No se puede asignar un evenlister a un elemento que aun no se carga en el DOM

const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
    $linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e) {
    console.log(
        `Hola te saluda ${this} el click lo originó ${e.target.className}`
    );
    //e.stopPropagation();
}

//Se asigna el addEventListener al document al evento click

document.addEventListener("click", (e) => {

    //Se evalua si coincide el selector que queremos que se aplique 
    if (e.target.matches(".eventos-flujo div")) {
        flujoEventos(e);
    }

    if (e.target.matches(".eventos-flujo a")) {
        alert("Hola soy tu amigo y docente digital... Jonathan MirCha");
        e.preventDefault(); //No abre el enlace (Pagina jonmircha)
        //e.stopPropagation();
    }
    console.log("Click en", e.target);
});


/* **********     Curso JavaScript: 77. BOM: Propiedades y Eventos - #jonmircha     ********** */
//El evento DOMContentLoaded es disparado cuando el documento HTML ha sido completamente cargado y parseado, sin esperar hojas de estilo, imágenes y subtramas para finalizar la carga.
//El evento load se dispara cuando se ha detectado la carga completa de la página.
//Es un error frecuente usar load cuando DOMContentLoaded es mucho más apropiado.

//Funcion resize Modifica el tamaño en consola en cuanto se modifica el tamaño de la ventana
window.addEventListener("resize", (e) => {
    //console.clear();
    console.log("********** Evento Resize **********");
    //Tamaños por vp (viewport)
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    //Tamaño del navegador
    console.log(window.outerWidth);
    console.log(window.outerHeight);
    console.log(e);
});

//Regresa los pixeles de donde se encuentra el usuario de acuerdo al scroll
window.addEventListener("scroll", (e) => {
    //console.clear();
    console.log("********** Evento Scroll **********");
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
});


//Nos cargan todos los elementos del Dom (incluyendo scripts/css, etc)
window.addEventListener("load", (e) => {
    //console.clear();
    console.log("********** Evento Load **********");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
});

//Cargar el Dom //Sin esperar a que carguen los scripts, archivos css, etc...
document.addEventListener("DOMContentLoaded", (e) => {
    console.log("********** Evento DOMContentLoaded **********");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
});



/* **********     Curso JavaScript: 78. BOM: Métodos - #jonmircha     ********** */
const $btnAbrir = document.getElementById("abrir-ventana"),
    $btnCerrar = document.getElementById("cerrar-ventana"),
    $btnImprimir = document.getElementById("imprimir-ventana");


let ventana;

$btnAbrir.addEventListener(
    "click",
    (e) => (ventana = window.open("https://jonmircha.com"))
);

$btnCerrar.addEventListener("click", (e) => {
    //window.close();
    ventana.close();
});

$btnImprimir.addEventListener("click", (e) => window.print());




/* **********     Curso JavaScript: 79. BOM: Objetos: URL, Historial y Navegador - #jonmircha     ********** */


console.log("********** Objeto URL (location) **********");
console.log(location);


console.log(location.origin); //Me da la ruta (origin) de donde viene el proyecto (ip del localhost)
console.log(location.protocol); //El protocolo
console.log(location.host); //host (Nomobre del dominio)
console.log(location.hostname); //host (La direccion ip)
console.log(location.port); //El puerto 
console.log(location.href); //Toda la url
console.log(location.hash); //El valor del # en la parte de una url
console.log(location.search); //Muestra los parametros o valores que se pasan por la url
console.log(location.pathname); //Nombre del archivo al que se esta consultando
//location.reload(); //Recarga 




console.log("********** Objeto Historial (history) **********");
console.log(history); //Son las paginas a las que se puede acceder hacia atras o hacia adelante en el navegador
console.log(history.length); //NUmero de paginas que hay 
//history.forward(1); //Cuantas paginas se quiere ir hacia adelante
//history.go(-3); //Hacia donde quiero ir (-1 atras, 1 adelante)
//history.back(2); //Cuantas paginas se quiere ir antes



console.log(navigator);
console.log(navigator.connection); //Da info de la conexion del usuario, dispositivos, etc
console.log(navigator.geolocation); //Info de geolocalizacion
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes); //Tipos de Formatos que acepta el navegador
console.log(navigator.onLine); //Deteccion de Perdida y recuperacion de la conexion
console.log(navigator.serviceWorker); //Api que ayuda hacer web Progresive Web Apps
console.log(navigator.storage); //Api de almacenamientos
console.log(navigator.usb); //Detecta dispositivos usb 
console.log(navigator.userAgent); //Info acerca del SO, Navegador etc..