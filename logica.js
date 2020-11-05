const slide = document.querySelector(".encabezado__cuerpo__menu")
const pantalla_blanca=document.querySelector(".encabezado__cuerpo__contenedor")
const pantalla_negra=document.querySelector(".encabezado__cuerpo_fondo")
const lista=document.querySelector(".encabezado__cuerpo__lista")
const print=console.log
let menuDesactivado=true;
let contador = 0;
/*funciones sincronas
asincronas
callback hell*/
//hamburguesa
document.querySelector("#icono").addEventListener("click",()=>{
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
})

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
                titulo:"Créditos Comp"
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

function activar_ventana(encabezado,id) {
    document.querySelector(".encabezado__cuerpo").style.visibility="visible"
    pantalla_negra.style.visibility="visible"
    pantalla_blanca.style.top="12vh"
    menuDesactivado=false
    document.querySelector(".encabezado__cuerpo__titulo").innerText=encabezado
    Generar_items(id)
}

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
}

function desactivar_ventana() {
    document.querySelector(".encabezado__cuerpo").style.visibility="hidden"
    pantalla_negra.style.visibility="hidden"
    pantalla_blanca.style.top="100%"
    lista.innerHTML=''
}


function disableScroll(){  
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function(){ window.scrollTo(x, y) };
}

function enableScroll(){  
    window.onscroll = null;
}

const avisos_imagenes=[
    {
        name:"noticia1",
        url: "img/noticia1.jpg"
    },{
        name:"noticia2",
        url: "img/noticia2.jpg"
    },{
        name:"noticia3",
        url: "img/noticia3.jpg"
    },
]


const avisos=Array.apply(null,document.querySelectorAll(".carrusel__imagen"))
let cuadros=Object.values(avisos)
/* let aux=items.pop()
    items.unshift(aux) */
let foco=1
let limite_suerior=cuadros.length-1
cuadros.map(i=>i.addEventListener('click',function(e){
    cambio(cuadros.indexOf(i),'0px','0px',5,'1') 
    if(cuadros.indexOf(i)==foco){
        abrir_pdf()
        return
    }else if(cuadros.indexOf(i)<foco){
        cambio(1,'50%','-50px',4,'.8')
        cambio(limite_suerior,'-50%','-50px',2,'.8')
        let aux=cuadros.pop()
        cuadros.unshift(aux)
    }else{
        cambio(1,'-100%','-50px',4,'.8')
        cambio(0,'100%','-50px',2,'.8')
        let aux=cuadros.shift()
        cuadros.push(aux)
    }
    
}))
function cambio(posicion,lado,profundo,z_index=4,opacidad='.6') {
    cuadros[posicion].style.opacity=opacidad;
    cuadros[posicion].style.transform="perspective(200px) translateX("+lado+") translateZ("+profundo+")"
    cuadros[posicion].style.zIndex=z_index; 
}

function abrir_pdf(){
    print("aierto")
}
