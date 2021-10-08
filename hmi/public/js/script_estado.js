

const socket = io();

let pestañaInicio = document.getElementById('pestañaInicio');
let estado = document.getElementById('estado');
let robot1 = document.getElementById('robot1');
let localizacion = document.getElementById('localizacion');
let iconoWifi = document.getElementById('icono-wifi');
let moma1 = document.getElementById('moma1');
let estado1 = document.getElementById('estado1');
let botonAtras = document.getElementById('botonAtras');
let botonFlota = document.getElementById('botonFlota');
let botonMOMA = document.getElementById('botonMOMA');
let botonAMR = document.getElementById('botonAMR');
let botonCOBOT = document.getElementById('botonCOBOT');
let moma1Partes = document.getElementById('moma1Partes');
// let chart = document.getElementById('chart');
let body = document.body;
let moma = document.querySelectorAll('.moma');
let amr = document.querySelectorAll('.amr');
let cobot = document.querySelectorAll('.cobot');


socket.on('idioma', function (idioma) {
  if(idioma == 'English'){
    console.log('Inglés');
    pestañaInicio.textContent = 'Home';
    pestañaAjustes.textContent = 'Settings';
    pestañaMapa.textContent = 'Map';
    pestañaAlarmas.textContent = 'Alarms';
    pestañaControl.textContent = 'Control';

    botonFlota.textContent = 'FLEET';
    botonMOMA.textContent = 'MOMAs';
    botonAMR.textContent = 'AMRs';
    botonCOBOT.textContent = 'COBOTs';
  }else if(idioma == 'Euskara'){
    pestañaInicio.textContent = 'Hasiera';
    pestañaAjustes.textContent = 'Ezarpenak';
    pestañaMapa.textContent = 'Mapa';
    pestañaAlarmas.textContent = 'Alarmak';
    pestañaControl.textContent = 'Kontrola';

    botonFlota.textContent = 'FLOTA';
    botonMOMA.textContent = 'MOMAk';
    botonAMR.textContent = 'AMR-ak';
    botonCOBOT.textContent = 'KOBOTAK';
  }else{
    pestañaInicio.textContent = 'Inicio';
    pestañaAjustes.textContent = 'Ajustes';
    pestañaMapa.textContent = 'Mapa';
    pestañaAlarmas.textContent = 'Alarmas';
    pestañaControl.textContent = 'Control';
    
    botonFlota.textContent = 'FLOTA';
    botonMOMA.textContent = 'MOMAs';
    botonAMR.textContent = 'AMRs';
    botonCOBOT.textContent = 'COBOTs';
  }
});

socket.on('modo', (data) => {
  if(data == "Usuario"){
    pantallaControl.style.display = 'none';
  }else{
    pantallaControl.style.display = 'initial';
  }
});

botonAtras.style.display = 'none';
moma1Partes.style.display = 'none';

botonFlota.style.backgroundColor = 'rgb(20, 112, 199)';


//Lectura de la variable 1 (estado de Robot 1)

socket.on('message', function (data) {
  console.log('Lectura conexion')
  if(data.value){
    estado.textContent = ' CONECTADO';
    iconoWifi.style.display = 'initial';
    if(localizacion.textContent.includes('Going') && robot1.classList.contains('ldred')){
      robot1.classList.replace('ldred','ldblue');
    }else {
      robot1.classList.replace('ldred','ldgreen');
    }
  }else{
    estado.textContent = ' DESCONECTADO';
    iconoWifi.style.display = 'none';
    robot1.classList.replace('ldgreen','ldred');
    robot1.classList.replace('ldblue','ldred');
  }
});

//Lectura de la variable 2 (batería de Robot 1)

socket.on('bateria', function (data) {
  let bateria = document.getElementById('bateria');
  // let avisoBateria = document.getElementById('aviso-bateria');
  // let iconoAvisoBateria = document.getElementById('icono-aviso-bateria');
  bateria.textContent = `Batería: ${data.value.toFixed(1)} %`;
  // if(data.value < 20){
  //   avisoBateria.textContent = ` Batería baja (${data.value.toFixed(1)}%), envíe el Robot 1 al Dock Station cuanto antes.`;
  //   iconoAvisoBateria.style.display = 'inherit';
  // }else{
  //   avisoBateria.textContent = '';
  //   iconoAvisoBateria.style.display = 'none';
  // }
});

//Lectura de la localizacion

socket.on('string', function (data) {
  localizacion.textContent = data.value;
  console.log(localizacion.textContent);
  console.log(estado.textContent);
  if(localizacion.textContent.includes('GOING') && estado.textContent == ' CONECTADO'){
    console.log('Going')
    robot1.classList.replace('ldgreen','ldblue');
  }else if(estado.textContent == ' CONECTADO'){
    robot1.classList.replace('ldblue','ldgreen');
  }else if(estado.textContent == ' DESCONECTADO'){
    robot1.classList.replace('ldblue','ldred');
  }
  if(localizacion.textContent.includes('Docked')){
    robot1.classList.add('ldyellow');
  }else{
    robot1.classList.remove('ldyellow');
  }
});

robot1.addEventListener('click',()=>{
  socket.emit('message',{
    value:true
  });
})

moma1.addEventListener('click',()=>{
  estado1.style.display = 'none';
  botonFlota.style.display = 'none';
  botonMOMA.style.display = 'none';
  botonAMR.style.display = 'none';
  botonCOBOT.style.display = 'none';
  botonAtras.style.display = 'initial';
  moma1Partes.style.display = 'initial';

})

botonAtras.addEventListener('click',()=>{
  estado1.style.display = 'initial';
  botonFlota.style.display = 'initial';
  botonMOMA.style.display = 'initial';
  botonAMR.style.display = 'initial';
  botonCOBOT.style.display = 'initial';
  moma1Partes.style.display = 'none';
  botonAtras.style.display = 'none';
})

botonMOMA.addEventListener('click',()=>{
  botonMOMA.style.backgroundColor = 'rgb(20, 112, 199)';
  botonAMR.style = 'initial';
  botonFlota.style = 'initial';
  botonCOBOT.style = 'initial';
  for(let i = 0; i < moma.length; i++){
    moma[i].style.display = 'initial';
  };
  for(let i = 0; i < amr.length; i++){
    amr[i].style.display = 'none';
  };
  for(let i = 0; i < cobot.length; i++){
    cobot[i].style.display = 'none';
  };
})

botonAMR.addEventListener('click',()=>{
  botonAMR.style.backgroundColor = 'rgb(20, 112, 199)';
  botonMOMA.style = 'initial';
  botonFlota.style = 'initial';
  botonCOBOT.style = 'initial';
  for(let i = 0; i < amr.length; i++){
    amr[i].style.display = 'initial';
  };
  for(let i = 0; i < moma.length; i++){
    moma[i].style.display = 'none';
  };
  for(let i = 0; i < cobot.length; i++){
    cobot[i].style.display = 'none';
  };
})

botonCOBOT.addEventListener('click',()=>{
  botonCOBOT.style.backgroundColor = 'rgb(20, 112, 199)';
  botonMOMA.style = 'initial';
  botonFlota.style = 'initial';
  botonAMR.style = 'initial';
  for(let i = 0; i < cobot.length; i++){
    cobot[i].style.display = 'initial';
  };
  for(let i = 0; i < amr.length; i++){
    amr[i].style.display = 'none';
  };
  for(let i = 0; i < moma.length; i++){
    moma[i].style.display = 'none';
  };
})

botonFlota.addEventListener('click',()=>{
  botonFlota.style.backgroundColor = 'rgb(20, 112, 199)';
  botonMOMA.style = 'initial';
  botonAMR.style = 'initial';
  botonCOBOT.style = 'initial';
  for(let i = 0; i < cobot.length; i++){
    cobot[i].style.display = 'initial';
  };
  for(let i = 0; i < amr.length; i++){
    amr[i].style.display = 'initial';
  };
  for(let i = 0; i < moma.length; i++){
    moma[i].style.display = 'initial';
  };
})


const sdk = new ChartsEmbedSDK({
baseUrl: 'https://charts.mongodb.com/charts-project-0-xzfjn',
showAttribution: false
});

const chart = sdk.createChart({ chartId: '180f8fba-248a-4f1b-983b-e68a565dc7b3' });
chart.render(document.getElementById('chart'));






 








