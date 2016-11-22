/*
El rover tendra coordenadas de punto inicial (x,y)(es decir)
El rover tendra una direccion inicial(N,S,E,W)
El rover esta en una rejilla 10x10;
Implementa comandos que van hacia delante y hacia atras(f,b)
Implementa comandos que van hacia la izquierda o hacia la derecha(l,r)
El robot solo cambia la direccion a la que se enfrenta cuando el usuario establece este comando.
No se movera automaticamente a la derecha o izkierda
Para hacer que cambie su posicion, el usuario necesita especificar el cambio de direccion y luego el movimiento real

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


/*A -> Crea un objeto para representar el rover que tiene los atributos de posicion y direccion*/

var myRover = {
  position: [0,0],
  direction: 'N'
};


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

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

goForward(myRover);
