document.querySelector("#logo").addEventListener("click",()=>{
    document.querySelector('.encabezado__logo').style.display="flex"
    document.querySelector('.encabezado__subenlace_logo').style.display="none"
    iniciar()
})
const noticias=["pdfs/info 1.pdf","pdfs/info 2.pdf","pdfs/info 3.pdf","pdfs/info 4.pdf","pdfs/info 5.pdf","pdfs/info 6.pdf"]
function iniciar() {
    fetch('home.html')
    .then(function(response) {
        return response.text();
    })
    .then(function(body) {
        document.querySelector('#principal').innerHTML = body;
        const noti_tec=Array.apply(null,document.querySelectorAll(".tarjeta"))
        noti_tec.map((i,index)=>i.addEventListener('click',function(e){
            fetch('pdf.html')
            .then(function(response) {
                return response.text();
            })
            .then(function(body) {
                document.querySelector('.encabezado').style.position="relative"
                document.querySelector('footer').style.display="none"
                document.querySelector('#principal').innerHTML = body;
                document.querySelector("embed").src=noticias[index]
                document.querySelector('#principal').style.paddingTop="0"
                document.querySelector('.encabezado__logo').style.display="none"
                document.querySelector('.encabezado__subenlace_logo').style.display="flex"
            });    
        }))
        document.querySelector('.encabezado').style.position="fixed"
        document.querySelector('footer').style.display="flex"
        document.querySelector('#principal').style.paddingTop="calc(4em + 2vw)"
        const avisos=Array.apply(null,document.querySelectorAll(".carrusel__imagen"))
        let cuadros=Object.values(avisos)
        let foco=1
        let limite_suerior=cuadros.length-1
        cuadros.map(i=>i.addEventListener('click',function(e){
            mover_avisos(i)
        }))
        function mover_avisos(i){
            cambio(cuadros.indexOf(i),'0px','0px',5,'1') 
            if(cuadros.indexOf(i)==foco){
                avisos_imagenes.forEach(element => {
                    if(i.src.includes(element.url)){
                        return abrir_pdf(element.posicion)
                    }
                });
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
        }
        function abrir_pdf(posicion){
            fetch('pdf.html')
            .then(function(response) {
                return response.text();
            })
            .then(function(body) {
                document.querySelector('.encabezado').style.position="relative"
                document.querySelector('footer').style.display="none"
                document.querySelector('#principal').innerHTML = body;
                document.querySelector("embed").src=noticias[posicion]
                document.querySelector('#principal').style.paddingTop="0"
                document.querySelector('.encabezado__logo').style.display="none"
                document.querySelector('.encabezado__subenlace_logo').style.display="flex"
            });    
            
        }
        function cambio(posicion,lado,profundo,z_index=4,opacidad='.6') {
            cuadros[posicion].style.opacity=opacidad;
            cuadros[posicion].style.transform="perspective(200px) translateX("+lado+") translateZ("+profundo+")"
            cuadros[posicion].style.zIndex=z_index; 
        }
    });
}
iniciar()