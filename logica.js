const slide = document.querySelector(".encabezado__cuerpo__menu")
const pantalla_blanca=document.querySelector(".encabezado__cuerpo__contenedor")
const pantalla_negra=document.querySelector(".encabezado__cuerpo_fondo")
const lista=document.querySelector(".encabezado__cuerpo__lista")
const print=console.log
let menuDesactivado=true;
let contador = 0;

//hamburguesa
document.querySelector("#icono").addEventListener("click",()=>{
    hamburguesa_toogle()
})

function hamburguesa_toogle(){
    let enlaces = document.querySelector("#enlaces");
    let hamburguesa= document.querySelector("#icono");
    if(contador==0){
        enlaces.className = ('encabezado__enlaces --activado')
        disableScroll()
        contador=1
    }else{
        enlaces.className = ('encabezado__enlaces --desactivado')
        desactivar_ventana()
        enableScroll()
        contador = 0
    }
    hamburguesa.classList.toggle("is-active")
}
const enlace_menu=Array.apply(null,document.querySelectorAll(".link"))
enlace_menu.map(i=>i.addEventListener('click',function(e){
    activar_ventana(i.lastChild.innerText,i.id)
}))

//desactiva ventana blanca emergente
document.querySelector(".encabezado__cuerpo__icono").addEventListener("click",()=>{desactivar_ventana()})
pantalla_negra.addEventListener("click",()=>{desactivar_ventana()})

//desactivar ventana con slide
slide.addEventListener('touchstart', (event)=>{
    inicio_slide1=event.touches[0].clientY 
    pantalla_blanca.style.transition='none'
})
slide.addEventListener('touchmove', (event)=>{
    let touch = event.touches[0]; 
    let cambio = touch.clientY-inicio_slide1
    if(cambio<0)return  
    cambio=cambio+50
    pantalla_blanca.style.top = cambio +'px';
    event.preventDefault()
})
slide.addEventListener('touchend', (event)=>{
    let cambio = event.changedTouches[0].clientY-inicio_slide1
    let parte = screen.height/3
    if(cambio<parte){
        pantalla_blanca.style.transition='all .3s'
        pantalla_blanca.style.top='12%'
    }else{
        desactivar_ventana()
    }})

const items=[
    {
        name:"Quienes somos",
        id:"somos",
        elementos:[
            {
                icono:"fa-door-open",
                titulo:"Bienvenida"
            },{
                icono:"fa-address-book",
                titulo:"Directorio"
            },{
                icono:"fa-calendar-alt",
                titulo:"Calendario"
            },{
                icono:"fa-users",
                titulo:"Transparencia"
            },{
                icono:"fa-search-location",
                titulo:"Oferta Educativa"
            },{
                icono:"fa-building",
                titulo:"Departamentos"
            }
        
        ]
    },{
        name:"Licenciaturas",
        id:"licencia",
        elementos:[
            {
                icono:"fa-door-open",
                titulo:"Ing. Sisemas"
            },{
                icono:"fa-address-book",
                titulo:"Ing. Mecatronica"
            },{
                icono:"fa-calendar-alt",
                titulo:"Contador Público"
            },{
                icono:"fa-users",
                titulo:"Ing. Mecánica"
            },{
                icono:"fa-search-location",
                titulo:"Eléctrica"
            },{
                icono:"fa-building",
                titulo:"Química"
            }
        
        ]
    },{
        name:"Estudiantes",
        id:"estudiantes",
        elementos:[
            {
                icono:"fa-door-open",
                titulo:"Mind Box"
            },{
                icono:"fa-address-book",
                titulo:"Moodle"
            },{
                icono:"fa-calendar-alt",
                titulo:"Servicios Escolares"
            },{
                icono:"fa-users",
                titulo:"Residencia"
            },{
                icono:"fa-search-location",
                titulo:"Oferta Educativa"
            },{
                icono:"fa-building",
                titulo:"Encuentra Empleo"
            },{
                icono:"fa-building",
                titulo:"Créditos Complementarios"
            }
        
        ]
    },{
        name:"Personal ITM",
        id:"personal",
        elementos:[
            {
                icono:"fa-door-open",
                titulo:"Mind Box"
            },{
                icono:"fa-address-book",
                titulo:"Moodle"
            },{
                icono:"fa-calendar-alt",
                titulo:"Correos"
            },{
                icono:"fa-users",
                titulo:"Recursos Humanos"
            },{
                icono:"fa-search-location",
                titulo:"Centro de Inf"
            },{
                icono:"fa-building",
                titulo:"Departamentos"
            }
        
        ]
    },{
        name:"Egresados",
        id:"egresados",
        elementos:[
            {
                icono:"fa-door-open",
                titulo:"Servicios Escolares"
            },{
                icono:"fa-address-book",
                titulo:"Cedula Profesional"
            }
        ]
    },
]

function Generar_items(id) {
    const lista=document.querySelector(".encabezado__cuerpo__lista")
    let contador=0
    items.filter((x,y)=>{if(x.id==id)contador=y})
    items[contador].elementos.forEach((indice)=>{
        const item=document.createElement('li')
        item.classList='encabezado__cuerpo__item'
        const item_icono=document.createElement('i')
        item_icono.classList='encabezado__cuerpo__itemicono fas '+indice.icono
        const item_cuerpo=document.createElement('p')
        item_cuerpo.classList='encabezado__cuerpo__txt'
        item_cuerpo.innerHTML='<p>'+indice.titulo+'</p>'
        item.appendChild(item_icono)
        item.appendChild(item_cuerpo)
        lista.appendChild(item)
    })
    lista.style.overFlowY = "scroll";
}
function activar_ventana(encabezado,id) {
    document.querySelector(".encabezado__cuerpo").style.visibility="visible"
    pantalla_negra.style.visibility="visible"
    pantalla_blanca.style.top="10%"
    document.querySelector('.encabezado__icono').style.display="none"
    menuDesactivado=false
    document.querySelector(".encabezado__cuerpo__titulo").innerText=encabezado
    Generar_items(id)
    disableScroll()
}
function desactivar_ventana() {
    document.querySelector(".encabezado__cuerpo").style.visibility="hidden"
    if(document.body.clientWidth<=700){
        document.querySelector('.encabezado__icono').style.display="flex"
    }else{
        document.querySelector('.encabezado__icono').style.display="none"
    }
    pantalla_negra.style.visibility="hidden"
    pantalla_blanca.style.top="120%"
    lista.innerHTML=''
    enableScroll()
}


function disableScroll(){  
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function(){ window.scrollTo(x, y) };
}

function enableScroll(){  
    window.onscroll = null;
}
function resize() {
    if (document.body.clientWidth>700) {
        document.querySelector('.encabezado__icono').style.display="none"
        document.querySelector('.encabezado__cuerpo__icono').className=("encabezado__cuerpo__icono fas fa-times")
    }else{
        desactivar_ventana()
        document.querySelector('.encabezado__icono').style.display="flex"
        document.querySelector('.encabezado__cuerpo__icono').className=("encabezado__cuerpo__icono fas fa-arrow-left")
        enableScroll()   
    }
  }
  
window.onresize = resize;
const avisos_imagenes=[
    {
        name:"noticia1",
        url: "img/noticia1.jpg",
        posicion:0
    },{
        name:"noticia2",
        url: "img/noticia2.jpg",
        posicion:1
    },{
        name:"noticia3",
        url: "img/noticia3.jpg",
        posicion:2
    },
]
if (document.body.clientWidth>700) {
    document.querySelector('.encabezado__cuerpo__icono').className=("encabezado__cuerpo__icono fas fa-times")
}

