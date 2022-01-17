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
const m1 = prompt('Назовите фильм', '');
const o1 = prompt('Оцените', '');
const m2 = prompt('Назовите фильм', '');
const o2 = prompt('Оцените', '');

personalMovieDB.movies = {m1:o1, m2:o2};

console.log(personalMovieDB);
console.log(m1);
console.log(m2);
