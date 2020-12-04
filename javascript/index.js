//BASES DE DATOS-------------------------------------------------------------------------
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
            },{
                icono:"fa-calendar-alt",
                titulo:"Calendario",
                url:"pdfs/calendario.pdf",
                tipo:"pdf"
            },{
                icono:"fa-users",
                titulo:"Transparencia",
                url:"html/transparencia.html",
                tipo:"web"
            },{
                icono:"fa-building",
                titulo:"Licitaciones",
                url:"html/bienvenida.html",
                tipo:"web"
            }
        
        ]
    },{
        name:"Licenciaturas",
        id:"licencia",
        elementos:[
            {
                icono:"fa-microchip",
                titulo:"Ing. Electronica",
                url:"pdfs/electronica.pdf"
            },{
                icono:"fa-tasks",
                titulo:"Ing. Gestión",
                url:"pdfs/gestion.pdf"
            },{
                icono:"fa-industry",
                titulo:"Ing. Industrial",
                url:"pdfs/industrial.pdf"
            },{
                icono:"fa-truck-loading",
                titulo:"Ing. Logística",
                url:"pdfs/logistica.pdf"
            },{
                icono:"fa-toolbox",
                titulo:"Ing. Materiales",
                url:"pdfs/materiales.pdf"
            },{
                icono:"fa-tools",
                titulo:"Ing. Mecánica",
                url:"pdfs/mecanica.pdf"
            },{
                icono:"fa-plug",
                titulo:"Ing. Energías Renovables",
                url:"pdfs/renovables.pdf"
            },{
                icono:"fa-tv",
                titulo:"Ing. Sisemas",
                url:"pdfs/sistemas.pdf"
            },
        
        ]
    },{
        name:"Estudiantes",
        id:"estudiantes",
        elementos:[
            {
                icono:"fa-chalkboard",
                titulo:"Mind Box",
                url:"https://itmexicali.mindbox.app/login/alumno",
                tipo:"url"
            },{
                icono:"fa-chalkboard-teacher",
                titulo:"Moodle",
                url:"https://moodle.itmexicali.edu.mx/login/index.php",
                tipo:"url"
            },{
                icono:"fa-user-plus",
                titulo:"Servicios Escolares",
                url:"html/servicios.html",
                tipo:"web"
            },{
                icono:"fa-user-edit",
                titulo:"Residencia",
                url:"html/residencia.html",
                tipo:"web"
            }
        
        ]
    },{
        name:"Personal ITM",
        id:"personal",
        elementos:[
            {
                icono:"fa-chalkboard",
                titulo:"Mind Box",
                url:"https://itmexicali.mindbox.app/login/administrativo",
                tipo:"url"
            },{
                icono:"fa-chalkboard-teacher",
                titulo:"Moodle",
                url:"https://moodle.itmexicali.edu.mx",
                tipo:"url"
            },{
                icono:"fa-envelope",
                titulo:"Correos",
                url:"pdfs/correos_oficiales.pdf",
                tipo:"pdf"
            }
        
        ]
    },{
        name:"Egresados",
        id:"egresados",
        elementos:[
            {
                icono:"fa-user-plus",
                titulo:"Servicios Escolares",
                url:"html/servicios.html",
                tipo:"web"
            },{
                icono:"fa-id-card",
                titulo:"Cedula Profesional",
                url:"https://www.gob.mx/cedulaprofesional",
                tipo:"url"
            }
        ]
    },
]

const avisos_imagenes=[
    {
        name:"noticia1",
        url: "img/noticia_1.jpg",
        posicion:0
    },{
        name:"noticia2",
        url: "img/noticia_2.jpg",
        posicion:1
    },{
        name:"noticia3",
        url: "img/noticia_3.jpg",
        posicion:2
    },
]

const id_nosotros=['bienvenida','directorio','calendario','transparencia','licitaciones']
const id_licenciaturas=['','electronica','gestion','industrial','logistica','materiales','mecanica','renovables','sistemas']
const id_estudiantes=['','','mindbox','moodle','servicios','residencia']
const id_personal=['','','','mindbox','moodle','correos']
const id_egresados=['','','','','servicios','cedula']

//Funciones-------------------------------------------------------------------------------------
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

function Generar_items(encabezado,id) {
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
        switch (encabezado) {
            case "Nosotros":
                item.setAttribute('id',""+id_nosotros[contador]+"")
                break;
            case "Licenciaturas":
                item.setAttribute('id',""+id_licenciaturas[contador]+"")
                break;
            case "Estudiantes":
                item.setAttribute('id',""+id_estudiantes[contador]+"")
                break;
            case "Personal":
                item.setAttribute('id',""+id_personal[contador]+"")
                break;
            case "Egresados":
                item.setAttribute('id',""+id_egresados[contador]+"")
                break;
                                                
            default:
                break;
        }
        contador+=1
        lista.appendChild(item)
    })
    const even_items=Array.apply(null,document.querySelectorAll(".encabezado__cuerpo__item"))
    let eventos_items=Object.values(even_items)
    eventos_items.map(i=>i.addEventListener('click', function(e){
        aviso=0
        switch (encabezado) {
            case "Nosotros":
                items[0].elementos.forEach(element => {
                    if (element.url.includes(i.id)) {
                        return abrir(element.url)  
                    }
                });
                break;
            case "Licenciaturas":
                items[1].elementos.forEach(element => {
                    if (element.url.includes(i.id)) {
                       return abrir(element.url)
                    }
                });
                break;
            case "Estudiantes":
                items[2].elementos.forEach(element => {
                    if (element.url.includes(i.id)) {
                        if(element.tipo=="url")
                            window.open(element.url, '_blank');
                        else
                            abrir(element.url)
                    }
                });
                break;
            case "Personal":
                items[3].elementos.forEach(element => {
                    if (element.url.includes(i.id)) {
                        if(element.tipo=="url")
                            window.open(element.url, '_blank');
                        else
                            abrir(element.url)
                    }
                });
                break;
            case "Egresados":
                items[4].elementos.forEach(element => {
                    if (element.url.includes(i.id)) {
                        if(element.tipo=="url")
                            window.open(element.url, '_blank');
                        else
                            abrir(element.url)
                    }
                });
                break;
                                                
            default:
                break;
        }
    }))
}

function activar_ventana(encabezado,id) {
    document.querySelector(".encabezado__cuerpo").style.visibility="visible"
    pantalla_negra.style.visibility="visible"
    pantalla_blanca.style.top="10%"
    document.querySelector('.encabezado__icono').style.display="none"
    menuDesactivado=false
    document.querySelector(".encabezado__cuerpo__titulo").innerText=encabezado
    Generar_items(encabezado,id)
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
let aviso=0
function abrir(url){
    fetch('html/pdf.html')
    .then(function(response) {
        return response.text();
    })
    .then(function(body) {
        document.querySelector('footer').style.display="none"
        document.querySelector('#principal').innerHTML = body;
        document.querySelector("embed").src=url
        document.querySelector('.encabezado__logo').style.display="none"
        document.querySelector('.encabezado__subenlace_logo').style.display="flex"
        if (document.body.clientWidth<701) {
            document.querySelector(".encabezado__icono").style.display='flex'   
        }
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
function ocultar_footer(params) {
    
}
//VARIABLES GLOBALES
const slide = document.querySelector(".encabezado__cuerpo__menu")
const pantalla_blanca=document.querySelector(".encabezado__cuerpo__contenedor")
const pantalla_negra=document.querySelector(".encabezado__cuerpo_fondo")
const lista=document.querySelector(".encabezado__cuerpo__lista")
const print=console.log
let menuDesactivado=true;
let contador = 0;

//CÓDIGO

//icono hamburguesa
document.querySelector("#icono").addEventListener("click",()=>{
    hamburguesa_toogle()
})

const enlace_menu=Array.apply(null,document.querySelectorAll(".link"))
enlace_menu.map(i=>i.addEventListener('click',function(e){
    activar_ventana(i.lastChild.innerText,i.id)
}))

//desactivar ventana del menu
document.querySelector(".encabezado__cuerpo__icono").addEventListener("click",()=>{desactivar_ventana()})
pantalla_negra.addEventListener("click",()=>{desactivar_ventana()})

//desactivar ventana del menu con slide
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
    }
})
 
window.onresize = resize;
if (document.body.clientWidth>700) {
    document.querySelector('.encabezado__cuerpo__icono').className=("encabezado__cuerpo__icono fas fa-times")
}
