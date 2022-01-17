"use strict";

let numberIfFilms;
numberIfFilms = prompt("Сколько фильмов посмотрели?", "");
console.log(numberIfFilms);

let personalMovieDB;
personalMovieDB = {
    'count':numberIfFilms,
    'movies':{},
    'actors':{},
    'genres':[],
    'privat':false
};
// const m1 = prompt('Назовите фильм', '');
// const o1 = prompt('Оцените', '');
// const m2 = prompt('Назовите фильм', '');
// const o2 = prompt('Оцените', '');

for (let i = 1; i<3; i++){
    const m = prompt('Назовите фильм', ''),
          o = prompt('Оцените', '');
    if (m == '' || o == '' || m == null || o == null || m.length > 10 || o.length > 10) {
        console.log('Fu');
        i = 1;
    }
    personalMovieDB.movies[m] = o;
}

// personalMovieDB['movies'] = {m1:o1, m2:o2};
// personalMovieDB.movies[m1] = o1;
// personalMovieDB.movies[m2] = o2;

console.log(personalMovieDB);
