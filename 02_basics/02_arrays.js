const marvelHeros = ["thor", "Ironman", "spiderman"];
const dc_Heros = ["superman", "flash", "batman"];

// marvelHeros.push(dc_Heros);

// console.log(marvelHeros);
// console.log(marvelHeros[3][0]);

// const allHeros = marvelHeros.concat(dc_Heros);
// console.log(allHeros);


//spread operators
// const allNewHeros = [...marvelHeros,...dc_Heros];
// console.log(allNewHeros);

// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

// const usablabe_another_array = another_array.flat(Infinity);
// console.log(usablabe_another_array);


console.log(Array.isArray("kaushal"));
// console.log(Array.from("kaushal"));
console.log(Array.from({name : "kaushal"})); //intresting array


let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));

