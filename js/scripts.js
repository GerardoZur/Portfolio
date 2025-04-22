

function MostrarDiploma(titulo, imagen){
    let info = [titulo, imagen]; 

    let cont_diploma = document.createElement('div');
    cont_diploma.setAttribute("class", "cont-diploma");
    cont_diploma.setAttribute("id", "cont-diploma");

    let etiq_cont = document.createElement('h2');
    etiq_cont.setAttribute("class", "title-curr");

    let click = document.createElement('a');
    click.setAttribute("href", "javascript:close()");
    click.setAttribute("class", "cruz");

    let cruz = document.createElement('img');
    cruz.setAttribute("class", "img_close");
    cruz.setAttribute("src", "/assets/imagenes/Close.png");

    click.appendChild(cruz);
    cont_diploma.appendChild(click);
    let contenido = document.createTextNode(info[0]);
    etiq_cont.appendChild(contenido);
    cont_diploma.appendChild(etiq_cont);
    
    let phpAvanzado = document.createElement('img');
    phpAvanzado.setAttribute("class", "img_diplo");
    phpAvanzado.setAttribute("src", "/assets/imagenes/"+info[1]+".png");
    cont_diploma.appendChild(phpAvanzado);

    document.getElementById("cont-diplo").appendChild(cont_diploma);
    
}

function close(){
    const parent = document.getElementById("cont-diplo");
    const child = document.getElementById("cont-diploma");
    const throwawayNode = parent.removeChild(child);
}


let proyectos = [["Cabañas", "Éste proyecto surgió de la necesidad de llevar el registro y organización de un complejo de cabañas. <br> Utilizando PHP y MySQL, se validan las fechas en las que se desea realizar una reserva, posteriormente el programa indica si se encuentra o no disponible la cabaña para dicha fecha. <br> También requiere el registro de los clientes, pudiendo realizar la reserva solo si el cliente se encuentra dentro de la base de datos. Finalmente, una vez confirmada la reserva, se genera un PDF con el voucher de la misma, o el detalle, donde figurará el monto a pagar, día y horario, y también detalles del complejo de cabañas, como la dirección y las reglas dentro del complejo. <br><br> <a href='https://github.com/GerardoZur/Caba-as' target='_BLANK'> Github </a>", "<video class='video-demostracion' controls src='/assets/videos/cabanas.webm'>"],
    ["Julian", "Versión prelimiar de sitio web para un cantante profesional, donde entre las diversas secciones se detallará tanto su historia, como su actividad actual (Docente y Director Coral). <br> Contiene los enlaces para acceder tanto a sus redes sociales, como para establecer contacto por vía WhatsApp. <br><br> Cuenta con una sección de 'Canciones', donde se podrán escuchar diversas interpretaciones del artista. <br><br> <a href='https://cute-dango-aca513.netlify.app' target='_BLANK'> Enlace al sitio </a> ", "<img class='img-site' src='/assets/imagenes/img_site_juli.png'>"],
    ["Informes", "Aplicación de escritorio desarrollada con php para una veterinaria. Mediante un registro de clientes se generan informes, ya sea de laboratorio, diagnóstico por imágenes, o incluso la historia clínica. <br><br> <a href='https://github.com/GerardoZur/Informes' target='_BLANK'> Github </a>", "<video class='video-demostracion' controls src='/assets/videos/informes.webm'>"]];
    


let num = 0;

function cambiarMas() {
  num++;
}

function cambiarMenos() {
  num--;
}

function llamarMas() {
  console.log("Antes del cambio: " + num);
  cambiarMas();
  console.log("Después del cambio: " + num);
  let title = document.getElementById("el");
  if(num > 2){
    num = 0;
    title.innerHTML = proyectos[num][0];
    let desc = document.getElementById("des");
    desc.innerHTML = proyectos[num][1];
    let file = document.getElementById("fil");
    file.innerHTML = proyectos[num][2];

  }else{
    title.innerHTML = proyectos[num][0];
  let desc = document.getElementById("des");
  desc.innerHTML = proyectos[num][1];
  let file = document.getElementById("fil");
  file.innerHTML = proyectos[num][2];
  }
  
}

function llamarMenos() {
  console.log("Antes del cambio: " + num);
  cambiarMenos();
  console.log("Después del cambio: " + num);
  let title = document.getElementById("el");
  if(num < 0){
    num = 2;
    title.innerHTML = proyectos[num][0];
    let desc = document.getElementById("des");
    desc.innerHTML = proyectos[num][1];
    let file = document.getElementById("fil");
    file.innerHTML = proyectos[num][2];
  } else
  title.innerHTML =  proyectos[num][0];
  let desc = document.getElementById("des");
  desc.innerHTML = proyectos[num][1];
  let file = document.getElementById("fil");
  file.innerHTML = proyectos[num][2];
  
}




let title = proyectos[num][0];
let desc = proyectos[num][1];
let file = proyectos[num][2];



 