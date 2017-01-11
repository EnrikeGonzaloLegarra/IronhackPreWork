

var planet = [
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
];

function Rover(nameRover, position1, position2, direction) {
    this.nameRover = nameRover;
    this.position = [position1, position2];
    this.direction = direction;
}

function obsta(x, y) {
    planet[x][y] = "1";
}


var Rover1 = new Rover('Rover 1', 1, 1, 'N');
var Rover2 = new Rover ('Rover 2',4,8,'S');

console.log("Loading Last Info....");
console.log("Name :" + Rover.nameRover);
console.log("Position :" + Rover.position);
console.log("Direction :" + Rover.direction);

function startRover(Rover) {
    planet[Rover.position[0] - 1][Rover.position[1] - 1] = Rover.nameRover + " -> "  + Rover.direction;
    console.log("Wait Please....Rover waking up");
    console.log('Initial ' + Rover.nameRover + ' Position: [' + Rover.position[0] + ', ' + Rover.position[1] + '] ' + 'Direction: ' + Rover.direction);
}
startRover(Rover1);
obsta(5, 6);
startRover(Rover2);

function seePlanet(planet) {
    for (i = 0; i < planet.length; i++) {
        console.log(planet[i]);
    }
}
seePlanet(planet);


function goForward(rover) {
    planet[rover.position[0] - 1][rover.position[1] - 1] = "0";
    switch (rover.direction) {
        case 'N':
            if ((rover.position[0] - 1 > 0)) {
                rover.position[0]--;
                planet[rover.position[0] - 1][rover.position[1] - 1] = rover.nameRover + " -> " + rover.direction;
            } else {
                rover.position[0] = rover.position[0] = 10;
                planet[rover.position[0] - 1][rover.position[1] - 1] = rover.nameRover + " -> " + rover.direction;
            }

            break;
        case 'E':
            if (rover.position[1] - 1 < 9) {
                rover.position[1]++;
                planet[rover.position[0] - 1][rover.position[1] - 1] = rover.nameRover + " -> " + rover.direction;

            } else {
                rover.position[1] = rover.position[1] = 1;
                planet[rover.position[0] - 1][rover.position[1] - 1] = rover.nameRover + " -> " + rover.direction;

            }
            break;
        case 'S':
            if (rover.position[0] - 1 < 9) {
                rover.position[0]++;
                planet[rover.position[0] - 1][rover.position[1] - 1] = rover.nameRover + " --> " + rover.direction;
            } else {
                rover.position[0] = rover.position[0] = 1;
                planet[rover.position[0] - 1][rover.position[1] - 1] = rover.nameRover + " --> " + rover.direction;

            }
            break;
        case 'W':
            if (rover.position[1] - 1 > 0) {
                rover.position[1]--;
                planet[rover.position[0] - 1][rover.position[1] - 1] = rover.nameRover + " --> " + rover.direction;
            } else {
                rover.position[1] = rover.position[1] = 10;
                planet[rover.position[0] - 1][rover.position[1] - 1] = rover.nameRover + " --> " + rover.direction;

            }
            break;
    }
    console.log("Go Foward " + rover.nameRover + " ---> " + rover.position[0] + ", " + rover.position[1] + " " + rover.direction);
    console.log("-----------");

}

function goBack(rover) {
    planet[rover.position[0] - 1][rover.position[1] - 1] = "0";
    switch (rover.direction) {
        case 'N':

            if (rover.position[0] - 1 < 9) {
                rover.position[0]++;
                planet[rover.position[0] - 1][rover.position[1] - 1] = rover.nameRover + " -> " + rover.direction;

            } else {
                rover.position[0] = rover.position[0] = 1;
                planet[rover.position[0] - 1][rover.position[1] - 1] = rover.nameRover + " -> " + rover.direction;

            }
            break;

        case 'E':
            if (rover.position[1] - 1 > 0) {
                rover.position[1]--;
                planet[rover.position[0] - 1][rover.position[1] - 1] = rover.nameRover + " -> " + rover.direction;

            } else {
                rover.position[1] = rover.position[1] = 10;
                  planet[rover.position[0] - 1][rover.position[1] - 1] = rover.nameRover + " -> " + rover.direction;
            }
            break;
        case 'S':
            if (rover.position[0] - 1 > 0) {
                rover.position[0]--;
                planet[rover.position[0] - 1][rover.position[1] - 1] = rover.nameRover + " -> " + rover.direction;

            } else {
                rover.position[0] = rover.position[0] = 10;
                planet[rover.position[0] - 1][rover.position[1] - 1] = rover.nameRover + " -> " + rover.direction;

            }
            break;
        case 'W':
            if (rover.position[1] - 1 < 9) {
                rover.position[1]++;
                planet[rover.position[0] - 1][rover.position[1] - 1] = rover.nameRover + " -> " + rover.direction;

            } else {
                rover.position[1] = rover.position[1] = 1;
                planet[rover.position[0] - 1][rover.position[1] - 1] = rover.nameRover + " -> " + rover.direction;

            }

            break;
    }

    console.log("Go Back " + rover.nameRover + " ---> " + rover.position[0] + ", " + rover.position[1] + "  " + rover.direction + "]");
}

function goRigth(rover) {
    switch (rover.direction) {
        case 'N':
            rover.direction = 'E';
            break;
        case 'E':
            rover.direction = 'S';
            break;
        case 'S':
            rover.direction = 'W';
            break;
        case 'W':
            rover.direction = 'N';
            break;
    }
    console.log("goRigth New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + " " + rover.direction + "]");
}

function goLeft(rover) {
    switch (rover.direction) {
        case 'N':
            rover.direction = 'W';
            break;
        case 'E':
            rover.direction = 'N';
            break;
        case 'S':
            rover.direction = 'E';
            break;
        case 'W':
            rover.direction = 'S';
            break;
    }
    console.log("goLeft New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + " " + rover.direction + "]");
}

function moveRover(instructions,planet,rover) {

    for (i = 0; i < instructions.length; i++) {
        if (instructions[i] == 'f') {
            console.log(instructions[i] + ' -> foward');
            goForward(rover);


        } else if (instructions[i] == 'b') {
            console.log(instructions[i] + ' -> back');
            goBack(rover);
        } else if (instructions[i] == 'l') {
            console.log(instructions[i] + ' -> left');
            goLeft(rover);


        } else if (instructions[i] == 'r') {
            console.log(instructions[i] + ' -> rigth');
            goRigth(rover);

        } else {
            console.log('Error instructions');
        }
    }
    seePlanet(planet);
}
moveRover("fffj",planet,Rover1);
