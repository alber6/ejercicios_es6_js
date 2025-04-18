// 2.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsLists = [32, 54, 21, 64, 75, 43]

const copyPoints = [...pointsLists];
console.log(copyPoints);

// 2.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const copytoy = {...toy};
console.log(copytoy);

// 2.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

const combinedLists = [...pointsList, ...pointsLis2];
console.log(combinedLists);

// 2.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.
const toys = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const combinedToys = {...toys, ...toyUpdate};
console.log(combinedToys);

// 2.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo,usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const copyColors = [colors[0], colors[1], colors[3], colors[4]];

console.log(...copyColors);