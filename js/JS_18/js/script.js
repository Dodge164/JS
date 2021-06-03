"use strict";
// Задание на урок:

//1) Первую часть задания повторить по уроку. Здесь мы не позволяем пользователю вводить 
//буквенные значения и пропускать ввод ответа. Исходим от обратного: пока все неправильные 
//действия true повторяем цикл, до тех пор, пока юзер не ответить адекватно.

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many movies have you actually seen', '');
    
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many movies have you actually seen', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('One of the latest viewed movies', ''),
              b = prompt('How much do you rate it?', '');
    
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    
            personalMovieDB.movies[a] = b;
            console.log('done!');          
        } else {
            console.log('error!'); 
            i--;
        }
    }
}

//rememberMyFilms();


function detectPersonalLevel() {
if (personalMovieDB.count < 10) {
    console.log('You have watched quite little movies'); 
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('You are classic viewer'); 
} else if (personalMovieDB.count > 30) {
    console.log('You are a movie fan');    // не срабатывает значение больше 30
} else {
  console.log('Error!');
}
}

//detectPersonalLevel();


//2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
//false - выводит в консоль главный объект программы

function showMyDB (hidden) {
if (!hidden) {
    console.log(personalMovieDB);
}
}

showMyDB(personalMovieDB.privat);


//3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
//"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
//genres

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Your favorite genre number ${i}`);
        personalMovieDB.genres[i - 1] = genre;
// второй вариант записи этих двух строк: 
//personalMovieDB.genres[i - 1] = prompt(`Your favorite genre is number ${i}`);

        // if (genre != null && genre != '' && genre.length < 50) {
    
        //     personalMovieDB.genres[genre];
        //     console.log('done!');          
        // } else {
        //     console.log('error!'); 
        //     i--;
        // }  
    }
}
writeYourGenres();

//P.S. Функции вызывать не обязательно*/

// Код возьмите из предыдущего домашнего задания







console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();


