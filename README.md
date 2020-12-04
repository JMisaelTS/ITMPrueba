# Proyecto Final Programación Web

## Optimizaciones
- Cada una de las secciones de la pagina del ITM  es accesible sin necesidad de recargar la página gracias al uso de AJAX
- Uso de un menú hamburguesa que facilita el acceso a las diferentes secciones
- implementación de animaciones para una mejor experiencia de usuario
- Rediseño general de secciones como por ejemplo "Bienvenida" para mejor apreciación del contenido
- Integración de nuevo contenido con tan solo agregarlo en el formato JSON ejemplo:


## Código a destacar
### Cargar Página sin recargar
Con el uso de las promesas y la API fecth es posible traer contenido sin recargar la página. 

Nuestro método **abrir()**  tiene un parametro que es la *url* de la dirección a abrir, con fetch mandamos traer una página web en blanco y en el método **cargar_pagina()** se incrusta el contenido de la url dentro de la página traída por medio de fetch.

*Nota: Uso la variable **aviso** como bandera para tener un control de la asíncronía*
```javascript
let aviso=0
function abrir(url){
    fetch('html/pdf.html')
    .then(function(response) {
        return response.text();
    })
    .then(function(body) {
        cargar_pagina(url)
    })
    .then(()=>{
        if(aviso==0){
            hamburguesa_toogle()
            desactivar_ventana()
        }   
        aviso=1
    })
    .catch(()=>{
        alert("error")
    })  
}
```
### Agregar contenido automáticamente
La constante items guarda los datos items de cada seccion del Navbar, en este caso usamos la sección **"Nosotros"** y basta con agregar un icono, titulo, url y tipo de url para que aparezca de manera automatica en el menu sin necesidar de agregar HTML ó CSS a la página
```javascript
const items=[
    {
        name:"Nosotros",
        id:"somos",
        elementos:[
            {
                icono:"fa-door-open",
                titulo:"Bienvenida",
                url:"html/bienvenida.html",
                tipo:"web"
            },{
                icono:"fa-address-book",
                titulo:"Directorio",
                url:"pdfs/directorio.pdf",
                tipo:"pdf"
            }
        ]
    }
]
```
### Animaciones
Hay varias maneras de animar pero en este caso la más utilizada fue la propiedad **transform** la cual tiene muchos valores como lo son **translate() rotate()** y** perspective()**

El código de ejemplo es el que uso para mover las imagenes en la sección avisos de la página web
```javascript
function cambio(posicion,lado,profundo,z_index=4,opacidad='.1') {
            cuadros[posicion].style.opacity=opacidad;
            cuadros[posicion].style.transform="perspective(200px) translateX("+lado+") translateZ("+profundo+")";
            cuadros[posicion].style.zIndex=z_index; 
        }
```

