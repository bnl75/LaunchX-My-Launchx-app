// Importo la clase:
const MissionCommander = require('./../app/missionCommander');

// Prueba de unidad para la clase MissionCommander:
describe("Unit Tests for Mission Commander Class", () => {
    test('1) Create a mission commander objet', () => {
        const myMissionCommander = new MissionCommander("Woopa")
        expect(myMissionCommander.name).toBe("Woopa");
    });
})



// Prueba de unidad genérica:
/* describe("Esto es una suite de pruebas", () => {
    test('Caso de prueba 1', () => {
        const result = 1 + 2 
        // expect(result).toBe(10); //Error
        expect(result).toBe(3); //Correcto
    });
}) */
