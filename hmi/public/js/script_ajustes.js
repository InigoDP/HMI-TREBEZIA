
const socket = io();

//BOTONES

let botonEuskara = document.getElementById('botonEuskara');
let botonEnglish = document.getElementById('botonEnglish');
let botonCastellano = document.getElementById('botonCastellano');
let modoIngeniero = document.getElementById('modoIngeniero');
let modoUsuario = document.getElementById('modoUsuario');
let botonClaro = document.getElementById('botonClaro');
let botonOscuro = document.getElementById('botonOscuro');
let botonCambioMapa = document.getElementById('botonCambioMapa');
let selectMapa = document.getElementById('selectMapa');

//PESTAÑAS

let pestañaInicio = document.getElementById('pestañaInicio');
let pestañaAjustes = document.getElementById('pestañaAjustes');
let pestañaMapa = document.getElementById('pestañaMapa');
let pestañaAlarmas = document.getElementById('pestañaAlarmas');
let pestañaControl = document.getElementById('pestañaControl');
let pantallaControl = document.getElementById('pantallaControl');

//AJUSTES

let ajusteIdioma = document.getElementById('ajusteIdioma');
let ajusteDiseño = document.getElementById('ajusteDiseño');
let ajusteModo = document.getElementById('ajusteModo');
let tituloAjustes = document.getElementById('tituloAjustes');
let urlOPCUA = document.getElementById('urlOPCUA');
let estadoOPCUA = document.getElementById('estadoOPCUA');

//LOGIN

let autenticacionIngeniero = document.getElementById('autenticacionIngeniero');
let usuarioNombre = document.getElementById('usuarioNombre');
let usuarioContraseña = document.getElementById('usuarioContraseña');
let botonAceptarLogin = document.getElementById('botonAceptarLogin');
let nombreUsuario = document.getElementById('nombreUsuario');
let contraseñaUsuario = document.getElementById('contraseñaUsuario');

let modo = '';


botonClaro.style.backgroundColor = 'rgb(20, 112, 199)';

socket.on('idioma',  (data) => {
    if(data == 'English'){

        botonEnglish.style.backgroundColor = 'rgb(20, 112, 199)';
        botonCastellano.style = 'initial';
        botonEuskara.style = 'initial';
        botonCastellano.textContent = 'Spanish';
        botonEuskara.textContent = 'Euskara';
        botonEnglish.textContent = 'English';
        modoUsuario.textContent = 'User';
        modoIngeniero.textContent = 'Engineer';
        botonClaro.textContent = 'Light';
        botonOscuro.textContent = 'Dark';

        pestañaAjustes.textContent = 'Settings';
        pestañaInicio.textContent = 'Home';
        pestañaMapa.textContent = 'Map';
        pestañaAlarmas.textContent = 'Alarms';
        pestañaControl.textContent = 'Control';

        ajusteIdioma.textContent = 'Language';
        ajusteDiseño.textContent = 'Design';
        ajusteModo.textContent = 'Mode';
        tituloAjustes.textContent = 'HMI Settings';

        autenticacionIngeniero.textContent = 'Authentication required to change to Engineer Mode';
        usuarioNombre.textContent = 'User Name';
        usuarioContraseña.textContent = 'Password';
        botonAceptarLogin.textContent = 'ACEPT';
    }else if(data == 'Euskara'){

        botonEuskara.style.backgroundColor = 'rgb(20, 112, 199)';
        botonEnglish.style = 'initial';
        botonCastellano.style = 'initial';
        botonCastellano.textContent = 'Gaztelera';
        botonEuskara.textContent = 'Euskara';
        botonEnglish.textContent = 'Ingelesa';
        modoUsuario.textContent = 'Erabiltzailea';
        modoIngeniero.textContent = 'Ingeniaria';
        botonClaro.textContent = 'Argia';
        botonOscuro.textContent = 'Iluna';

        pestañaAjustes.textContent = 'Ezarpenak';
        pestañaInicio.textContent = 'Hasiera';
        pestañaMapa.textContent = 'Mapa';
        pestañaAlarmas.textContent = 'Alarmak';
        pestañaControl.textContent = 'Kontrola';

        ajusteIdioma.textContent = 'Hizkuntza';
        ajusteDiseño.textContent = 'Diseinua';
        ajusteModo.textContent = 'Modua';
        tituloAjustes.textContent = 'HMI-aren Ezarpenak';

        autenticacionIngeniero.textContent = 'Beharrezko autentifikazioa Ingeniari Modura pasatzeko';
        usuarioNombre.textContent = 'Erabiltzaile Izena';
        usuarioContraseña.textContent = 'Pasahitza';
        botonAceptarLogin.textContent = 'ONARTU';
    }else{

        botonCastellano.style.backgroundColor = 'rgb(20, 112, 199)';
        botonEnglish.style = 'initial';
        botonEuskara.style = 'initial';
        botonCastellano.textContent = 'Castellano';
        botonEuskara.textContent = 'Euskara';
        botonEnglish.textContent = 'Inglés';
        modoUsuario.textContent = 'Usuario';
        modoIngeniero.textContent = 'Ingeniero';
        botonClaro.textContent = 'Claro';
        botonOscuro.textContent = 'Oscuro';

        pestañaAjustes.textContent = 'Ajustes';
        pestañaInicio.textContent = 'Inicio';
        pestañaMapa.textContent = 'Mapa';
        pestañaAlarmas.textContent = 'Alarmas';
        pestañaControl.textContent = 'Control';

        ajusteIdioma.textContent = 'Idioma';
        ajusteDiseño.textContent = 'Diseño';
        ajusteModo.textContent = 'Modo';
        tituloAjustes.textContent = 'Ajustes del HMI';

        autenticacionIngeniero.textContent = 'Autenticación requerida para pasar a Modo Ingeniero';
        usuarioNombre.textContent = 'Nombre de Usuario';
        usuarioContraseña.textContent = 'Contraseña';
        botonAceptarLogin.textContent = 'ACEPTAR';
    }
  });

  socket.on('modo', (data) => {
    if(data == "Usuario"){
      modoUsuario.style.backgroundColor = 'rgb(20, 112, 199)';
      modoIngeniero.style = 'initial';
      pantallaControl.style.display = 'none';
      modo = 'Usuario';
    }else{
      modoIngeniero.style.backgroundColor = 'rgb(20, 112, 199)';
      modoUsuario.style = 'initial';
      pantallaControl.style.display = 'initial';
      modo = 'Ingeniero';
    }
  });

  socket.on('mapa', (data) => {
    console.log(data);
    for(let i = 0; i < selectMapa.length; i++){
      if(selectMapa.options[i].text == data){
        selectMapa.options[i].selected = true;
        console.log('Coincide')
      }else{
        selectMapa.options[i].selected = false;
      }
    }
  });

  socket.on('opcua', (data) => {
    urlOPCUA.textContent = data;
  })

  socket.on('estadoOPCUA', (data) => {
    if(data){
      estadoOPCUA.textContent = 'CONECTADO';
      estadoOPCUA.style.color = 'green';
    }else{
      estadoOPCUA.textContent = 'DESCONECTADO';
      estadoOPCUA.style.color = 'red';
    }
    
  })

botonEuskara.addEventListener('click', () => {
    let idioma = 'Euskara';
    console.log('Cambio de idioma a: Euskara')
    socket.emit('idioma', idioma);
})

botonEnglish.addEventListener('click', () => {
    let idioma = 'English';
    console.log('Cambio de idioma a: English')
    socket.emit('idioma', idioma);
})

botonCastellano.addEventListener('click', () => {
    let idioma = 'Spanish';
    console.log('Cambio de idioma a: Castellano')
    socket.emit('idioma', idioma);
})

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

modoIngeniero.addEventListener('click', () => {
    openModal(modal);
})

modoUsuario.addEventListener('click', () => {
  socket.emit('cambioModo',"Usuario");
})

// openModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = document.querySelector(button.dataset.modalTarget)
//     openModal(modal)
//   })
// })

// overlay.addEventListener('click', () => {
//   const modals = document.querySelectorAll('.modal.active')
//   modals.forEach(modal => {
//     closeModal(modal)
//   })
// })

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

botonAceptarLogin.addEventListener('click', (e) => {
    e.preventDefault();
    socket.emit('login', {
      nombre: nombreUsuario.value,
      contraseña: contraseñaUsuario.value
    })
})

socket.on('resLogin', (data) => {
    nombreUsuario.value = '';
    contraseñaUsuario.value = '';
    console.log(data);
    if(data){
      closeModal(modal)
    }
});

botonCambioMapa.addEventListener('click', () => {
  if(modo == 'Ingeniero'){
    let mapaSeleccionado = selectMapa.options[selectMapa.selectedIndex].text;
    console.log(mapaSeleccionado);
    socket.emit('cambioMapa', mapaSeleccionado);
  }else{
    alert('El Modo Usuario no permite realizar un cambio de mapa')
  }

})
