//Inicio Funciones
function character(firstName, lastName, occupation, age, description, image) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.occupation = occupation;
    this.age = age;
    this.description = description;
    this.image = image;
}

function weapon(weaponName, weight, color, countHurt) {
    this.weaponName=weaponName;
    this.weigth = weight;
    this.color = color;
    this.countHurt = countHurt;
}

function room(roomName) {
    this.roomName = roomName;
}

//Funcion para sacar un numero aleatorio a partir del tamaño del array que le pasamos
//El numero nunca sera mas grande que el tamaño del array
function getRandom(array) {
    var random = Math.round(Math.random() * array.length);
    return random;
}

//----------------------------------------
//Creamos un array vacio
var chartacterArray = [];
//Creamos los objetos character
var character1 = new character("Jacob", "Green", "helper", 21, "Like money", "Green");
var character2 = new character("Doctor", "Orchid", "Biologist Daughter", 22, "Educate", "White");
var character3 = new character("Victor", "Plum", "Video Game Designer", 23, "Helper", "Purple");
var character4 = new character("Kasandra", "Scarlet", "Actriz", 24, "Ugly", "Red");
var character5 = new character("Eleanor", "Peacock", "Rich Familu", 25, "Popularity", "Blue");
var character6 = new character("Jack", "Mustard", "ExFutbol player", 26, "depressant", "Yellow");
//Introducimos los objetos character dentro de un array
chartacterArray.push(character1, character2, character3, character4, character5, character6);
//Comprabamos que el array se a llenado correctamente imprimiendo su tamaño
console.log("We have " + chartacterArray.length + " characters");

//++++*****************************************
//Creamos un array vacio
var weaponArray = [];
//Creamos los objetos weapon
var weapon1 = new weapon("Axe", "9-KG", "Brown", 7);
var weapon2 = new weapon("Knife", "1-KG", "Silver", 8);
var weapon3 = new weapon("Bat", "2-KG", "Light Brown", 5);
var weapon4 = new weapon("Pistol", "3-KG", "Black", 9);
var weapon5 = new weapon("Poison", "0,050-L", "Transparent", 10);
//Introducimos los objetos weapon dentro del array vacio
weaponArray.push(weapon1, weapon2, weapon3, weapon4, weapon5);
//Comprobamos que el array se llenado correctamente imprimiendo su tamaño
console.log("We have " + weaponArray.length + " weapons");

//++++*****************************************
//Creamos un array vacio
var roomArray = [];
//Creamos los objetos room
var room1 = new room("Hall");
var room2 = new room("Dining");
var room3 = new room("Living");
//Introducimos los objetos room dentro del array vacio
roomArray.push(room1, room2, room3);
//Comprobamos que el array se llenado correctamente imprimiendo su tamaño
console.log("We have " + roomArray.length + " weapons");

  var randomCharacter = getRandom(chartacterArray);
  var randomWeapon = getRandom(weaponArray);
  var randomRoom = getRandom(roomArray);

  console.log("Random Charater " + randomCharacter + ", RandomWeapon "+ randomWeapon + ", RandomRoom" + randomRoom );
//  console.log(chartacterArray[randomCharacter].firstName);
//  console.log(weaponArray[randomWeapon].weaponName);
//  console.log(roomArray[randomRoom].roomName);
console.log("The murder suspect is "+ chartacterArray[randomCharacter].firstName + " the alleged weapon "+ weaponArray[randomWeapon].weaponName + "," + roomArray[randomRoom].roomName + " room" ) ;
