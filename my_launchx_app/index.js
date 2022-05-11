// Importo la clase:
const MissionCommander = require('./app/missionCommander');

// Creo tres instancias de la clase:
const diego = new MissionCommander("Diego");
const caro  = new MissionCommander("Caro");
const kevin = new MissionCommander("Kevin");

// Imprimo el atributo nombre de cada objeto:
console.log(diego.name);
console.log(caro.name);
console.log(kevin.name);