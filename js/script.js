"use strict";

let x = 5;
alert(x++);

let numberIfFilms;

function start() {
    numberIfFilms = +prompt("Сколько фильмов посмотрели?", "");

    while (numberIfFilms == '' || numberIfFilms == null || isNaN(numberIfFilms)) {
        numberIfFilms = +prompt("Сколько фильмов посмотрели?", "");
    }
}
 
start();

const personalMovieDB = {
    'count':numberIfFilms,
    'movies':{},
    'actors':{},
    'genres':[],
    'privat':true,

    rememberMyFilms: function () {
        for (let i = 1; i<3; i++){
            const m = prompt('Назовите фильм', ''),
                  o = prompt('Оцените', '');
            if (m == '' || o == '' || m == null || o == null || 
            m.length > 10 || o.length > 10) {
                console.log('Fu');
                i--;
            }
            personalMovieDB.movies[m] = o;
        }
    },

    showMyDB: function (check) {
        if (!check) {
            console.log(personalMovieDB);
        }
    },
    
    writeYourGenres: function  () {
        for (let i = 0; i < 3 ; i++) {
            let genre = prompt(`Назовите жанр под номером ${i+1}`, ``);

            if (genre === '' || genre === null) {
                console.log('Wrong Answer!');
                i--;
            } else {
                personalMovieDB.genres[i] = genre;
            }
            
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Favorite genre nr ${i} is ${item}`);
        });
        
    },

    detectPersonalLevel: function  () {
        if (personalMovieDB.count < 10) {
            console.log("That's ok!");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Good!");
        } else if (personalMovieDB.count >= 10) {
            console.log("OMG, you're awesome!");
        } else {
            console.log("Error!");
        }
    },

    toggleVisibleMyDB: function (){
        if (personalMovieDB.privat == false) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    }

};

personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres ();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);