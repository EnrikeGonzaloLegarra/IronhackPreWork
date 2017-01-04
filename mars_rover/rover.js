/*
Ejercicio 1
A -> Crea un objeto para representar el rover que tiene los atributos de posicion y direccion

B -> Crea un array usando (Bidimensional)

C -> Crea funciones  para los distintos comandos.

D -> Trate de llamar a algunas de estas funciones y mostrar la nueva posicion del rover.

Ejercicio 2
Queremos poder enviar una serie de comandos del rover y ejecutarlos en secuencia.
Enviaremos una serie de comandos de caracteres, que pueden incluir.
F -> Adelante
B -> Atras
R -> Derecha
L -> izquierda
El rover nunca puede salir de la casilla 10x10

BONUS
Coloca algunos obstaculos en la cuadricula 10x10, el rover no puede cruzarlos.
Debe deternes y reportar que hay un obstaculo.
*/


var planet = [
  ['0','0','0','0','0','0','0','0','0','0'],
  ['0','0','0','0','0','0','0','0','0','0'],
  ['0','0','0','0','0','0','0','0','0','0'],
  ['0','0','0','0','0','0','0','0','0','0'],
  ['0','0','0','0','0','0','0','0','0','0'],
  ['0','0','0','0','0','0','0','0','0','0'],
  ['0','0','0','0','0','0','0','0','0','0'],
  ['0','0','0','0','0','0','0','0','0','0'],
  ['0','0','0','0','0','0','0','0','0','0'],
  ['0','0','0','0','0','0','0','0','0','0'],
];

function Rover(nameRover,position1,position2,direction) {
  this.nameRover = nameRover;
  this.position = [position1,position2];
  this.direction = direction;
}


var Rover1 = new Rover ('Rover 1',5,3,'W');
console.log("Loading Last Info....");
console.log("Name :" + Rover1.nameRover);
console.log("Position :" + Rover1.position);
console.log("Direction :" + Rover1.direction);

function startRover (Rover){
  planet[Rover1.position[0]][Rover1.position[1]]= Rover;
  console.log("Wait Please....Rover waking up");
  console.log('Initial ' + Rover1.nameRover + ' Position: ['+ Rover1.position[0] + ', ' + Rover1.position[1] + '] ' + 'Direction: ' + Rover1.direction );
}
startRover(Rover1);



function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++;
      break;
    case 'E':
      rover.position[1]++;
      break;
    case 'S':
      rover.position[0]--;
      break;
    case 'W':
      rover.position[1]--;
      break;
  }
  console.log("goFoward New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}
function goBack(rover){
  switch (rover.direction) {
    case 'N':
      rover.position[0]--;
      break;
    case 'E':
      rover.position[1]--;
      break;
    case 'S':
      rover.position[0]++;
      break;
    case 'W':
      rover.position[1]++;
      break;
  }
  console.log("goBack New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}
function goRigth(rover){
  switch (rover.direction) {
    case 'N':
      rover.position[0]++;
      break;
    case 'E':
      rover.position[1]++;
      break;
    case 'S':
      rover.position[0]--;
      break;
    case 'W':
      rover.position[1]--;

      break;
  }
  console.log("goRigth New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}
function goLeft(rover){
  switch (rover.direction) {
    case 'N':
      rover.position[0]--;
      break;
    case 'E':
      rover.position[1]--;
      break;
    case 'S':
      rover.position[0]++;
      break;
    case 'W':
      rover.position[1]++;

      break;
  }
  console.log("goLeft New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}
//goForward(Rover1);
//goLeft(Rover1);
