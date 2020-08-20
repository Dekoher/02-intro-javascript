import { getHeroById } from './bases/08-Import&Exports'

/**
 * Promises
 */
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroe = getHeroById(2);
//     console.log(heroe);
//     resolve(heroe);
//      //reject('Hero doesn't exist');
//   }, 2000);
// });

// promise.then((heroe) => {
//   console.log('heroe=>', heroe);
// })

const getHeroByIdAsync = id => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id);
      // console.log(hero);
      if(hero) {
        resolve(hero);
      } else {
        reject('Hero does not exist');
      }
    }, 1500);
  });
}

getHeroByIdAsync(1)
  // it is possible to pass the first argument passing the reference to the function as follows
  .then( console.log )
  .catch( console.error );