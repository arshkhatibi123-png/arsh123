const marvel_heros = ["thor","ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]//o/p=['Thor','ironman,'spiderman'['superman','flash','batman']]
marvel_heros.push(dc_heroes) // gave  o/p = array over array, so not use.
console.log(marvel_heros);
console.log(marvel_heros[3][1]);// 3rd element 1st
