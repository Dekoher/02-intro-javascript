
// Importations that are not default (individual exportations) need to be deconstructed like owners
import heroes, {owners} from "../data/heroes";


export const getHeroById = id => heroes.find( element => element.id === id);

// console.log(getHeroById(2));

export const getHeroesByOwner = owner => heroes.filter( heroe => heroe.owner === owner);

// console.log(getHeroesByOwner('Marvel'));
// console.log(getHeroesByOwner('DC'));