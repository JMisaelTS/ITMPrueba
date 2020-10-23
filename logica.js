let boton = document.querySelector("#icono");
let somos=document.querySelector("#somos");
let estudiantes=document.querySelector("#estudiantes");
let personal=document.querySelector("#personal");
let egresados=document.querySelector("#egresados");
let regreso_somos = document.querySelector("#regresar1")
let regreso_estudiantes = document.querySelector("#regresar2")
let regreso_personal = document.querySelector("#regresar3")
let regreso_egresados = document.querySelector("#regresar4")
let fondo_negro_somos=document.querySelector("#fondo1")
let fondo_negro_estudiantes=document.querySelector("#fondo2")
let fondo_negro_personal=document.querySelector("#fondo3")
let fondo_negro_egresados=document.querySelector("#fondo4")

let menuDesactivado=true;
let contador = 0;

//hamburguesa
boton.addEventListener("click",()=>{
    let enlaces = document.querySelector("#enlaces");
    let hamburguesa= document.querySelector("#icono");
    if(contador==0){
        enlaces.className = ('encabezado__enlaces --activado')
        disableScroll()
        contador=1
    }else{
        enlaces.className = ('encabezado__enlaces --desactivado')
        desactivar_ventana("#submenu1","#sub1","#fondo1")
        desactivar_ventana("#submenu2","#sub2","#fondo2")
        desactivar_ventana("#submenu3","#sub3","#fondo3")
        desactivar_ventana("#submenu4","#sub4","#fondo4")
        enableScroll()
        contador = 0
    }
    hamburguesa.classList.toggle("is-active")
})
//activa la ventana blanca emergente

somos.addEventListener("click",()=>{activar_ventana("#submenu1","#sub1","#fondo1")})
estudiantes.addEventListener("click",()=>{activar_ventana("#submenu2","#sub2","#fondo2")})
personal.addEventListener("click",()=>{activar_ventana("#submenu3","#sub3","#fondo3")})
egresados.addEventListener("click",()=>{activar_ventana("#submenu4","#sub4","#fondo4")})

function activar_ventana(id_contenido,id_ventana,id_fondo) {
    let cuerpo=document.querySelector(id_contenido)
    let cuerpo_blanco=document.querySelector(id_ventana)
    let fondo_negro=document.querySelector(id_fondo)
    cuerpo.style.visibility="visible"
    fondo_negro.style.visibility="visible"
    fondo_negro.style.background="rgba(0,0,0,.3)"
    menuDesactivado=false
    cuerpo_blanco.style.top="12vh"
}

//desactiva ventana blanca emergente
regreso_somos.addEventListener("click",()=>{desactivar_ventana("#submenu1","#sub1","#fondo1")})
regreso_estudiantes.addEventListener("click",()=>{desactivar_ventana("#submenu2","#sub2","#fondo2")})
regreso_personal.addEventListener("click",()=>{desactivar_ventana("#submenu3","#sub3","#fondo3")})
regreso_egresados.addEventListener("click",()=>{desactivar_ventana("#submenu4","#sub4","#fondo4")})
fondo_negro_somos.addEventListener("click",()=>{desactivar_ventana("#submenu1","#sub1","#fondo1")})
fondo_negro_estudiantes.addEventListener("click",()=>{desactivar_ventana("#submenu2","#sub2","#fondo2")})
fondo_negro_personal.addEventListener("click",()=>{desactivar_ventana("#submenu3","#sub3","#fondo3")})
fondo_negro_egresados.addEventListener("click",()=>{desactivar_ventana("#submenu4","#sub4","#fondo4")})
//desactivar ventana con slide
let slide_somos = document.querySelector("#menu1")
let slide_estudiantes = document.querySelector("#menu2")
let slide_personal = document.querySelector("#menu3")
let slide_egresados = document.querySelector("#menu4")
let inicio_slide1;
slide_somos.addEventListener('touchstart', function (event) {toque_inicial(event,'sub1')})
slide_somos.addEventListener('touchmove', function(event){toque_movimiento(event,'sub1')});
slide_somos.addEventListener('touchend', function (event) {toque_final(event,"#submenu1","#sub1","#fondo1")})
slide_estudiantes.addEventListener('touchstart', function (event) {toque_inicial(event,'sub2')})
slide_estudiantes.addEventListener('touchmove', function(event){toque_movimiento(event,'sub2')});
slide_estudiantes.addEventListener('touchend', function (event) {toque_final(event,"#submenu2","#sub2","#fondo2")})
slide_personal.addEventListener('touchstart', function (event) {toque_inicial(event,'sub3')})
slide_personal.addEventListener('touchmove', function(event){toque_movimiento(event,'sub3')});
slide_personal.addEventListener('touchend', function (event) {toque_final(event,"#submenu3","#sub3","#fondo3")})
slide_egresados.addEventListener('touchstart', function (event) {toque_inicial(event,'sub4')})
slide_egresados.addEventListener('touchmove', function(event){toque_movimiento(event,'sub4')});
slide_egresados.addEventListener('touchend', function (event) {toque_final(event,"#submenu4","#sub4","#fondo4")})

function toque_inicial(event,cuerpo_blanco) {
    console.log("hola")
    inicio_slide1=event.touches[0].clientY 
    document.getElementById(cuerpo_blanco).style.transition='none'
}

function toque_movimiento(event,cuerpo_blanco) {
    let touch = event.touches[0]; 
    let cambio = touch.clientY-inicio_slide1
    if(cambio<0)return  
    cambio=cambio+50
    document.getElementById(cuerpo_blanco).style.top = cambio +'px';
    event.preventDefault()
}

function toque_final(event,contenido,ventana,fondo) {
    let cambio = event.changedTouches[0].clientY-inicio_slide1
    let parte = screen.height/3
    console.log(cambio)
    console.log(parte)
    if(cambio<parte){
        document.querySelector(ventana).style.transition='all .3s'
        document.querySelector(ventana).style.top='12%'
    }else{
        desactivar_ventana(contenido,ventana,fondo)
    }
}

function desactivar_ventana(id_contenido,id_ventana,id_fondo) {
    let cuerpo=document.querySelector(id_contenido)
    let cuerpo_blanco=document.querySelector(id_ventana)
    let fondo_negro=document.querySelector(id_fondo)
    cuerpo.style.visibility="hidden"
    fondo_negro.style.visibility="hidden"
    cuerpo_blanco.style.top="100%"
}


window.addEventListener('resize', ()=>{
    if(screen.width > 750){
        contador=0;
        enlaces.classList.remove('--activado');
        enlaces.className = ('encabezado__enlaces --desactivado');

    }
})

function disableScroll(){  
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function(){ window.scrollTo(x, y) };
}

function enableScroll(){  
    window.onscroll = null;
}

