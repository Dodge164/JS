/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';


//1)
const numberOfFilms = +prompt('How many movies have you actually seen', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


for (let i = 0; i < 2; i++) {
    const a = prompt('One of the latest viewed movies', ''),
          b = prompt('How much do you rate it?', '');
//2)
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {

    personalMovieDB.movies[a] = b;
    console.log('done!');          
} else {
    console.log('error!'); 
    i--;
}
}

//console.log(personalMovieDB);

//3)
if (personalMovieDB.count < 10) {
    console.log('You have watched quite little movies'); 
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('You are classic viewer'); 
} else if (personalMovieDB.count > 30) {
    console.log('You are a movie fan');    // не срабатывает значение больше 30
} else {
  console.log('Error!');
}

console.log(personalMovieDB);

//4)
