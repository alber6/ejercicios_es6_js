// 3.1 Dado el siguiente array, devuelve un array con sus nombres utilizando .map().
const members = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
const names = members.map((member) => member.name);
console.log(names);

// 3.2 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
const nombres = users.map((user) => {
    if(user.name.startsWith("A")){
        user.name = "Anacleto";
    }
    return user.name
    });
console.log(nombres)

// 3.3 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];
const places = cities.map((city) =>{
    if(city.isVisited === true){
        city.name = city.name + " (Visitado)";
    }
    return city.name;
});
console.log(places);