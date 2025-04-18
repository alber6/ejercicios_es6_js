// 4.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18
const edades = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const numMayores18 = edades.filter((edad) => edad > 18);
console.log(numMayores18);

// 4.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const numPairs = ages.filter((age) => age % 2 == 0);
console.log(numPairs);

// 4.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamer = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const LOL = streamer.filter((stream) => stream.gameMorePlayed === "League of Legends");
console.log(LOL);

// 4.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos usar la funcion .includes() para la comprobación.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const nameWithU = streamers.filter((streamer) => streamer.name.includes("u"));
console.log(nameWithU);

// 4.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad
// gameMorePlayed. Recomendamos usar la funcion .includes() para la comprobación. Además, pon el valor de la propiedad
// gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35.

const legends = streamers.filter((streamer) => streamer.gameMorePlayed.includes("Legends"));

const legendsUp35 = legends.filter((legend) => legend.age > 35);
console.log(legendsUp35);

const gameUpperCase = legendsUp35.map((legendUp35) => ({...legendUp35, gameMorePlayed: legendUp35.gameMorePlayed.toUpperCase()}));
console.log(gameUpperCase);
