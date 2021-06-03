"use strict";
/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

// Код возьмите из предыдущего домашнего задания

//1) 

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        personalMovieDB.count = +prompt('How many movies have you actually seen', '');
        
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many movies have you actually seen', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('You have watched quite little movies'); 
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('You are classic viewer'); 
        } else if (personalMovieDB.count > 30) {
            console.log('You are a movie fan');    // не срабатывает значение больше 30
        } else {
          console.log('Error!');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }       
    },
    //2)
    toggleVisibleMyDB: function() {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    },
    ////////////
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Your favorite genre number ${i}`);
            
            if (genre == '' || genre == null) {
                writeYourGenres = prompt('What genres are your favorite?');
                i--;
            } else {
                        personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Your favorite genre number ${i + 1} - is ${item}`);

        });
    }
};

/*

function () {
    writeYourGenres = prompt('What genres are your favorite?');
    while (writeYourGenres == '' || writeYourGenres == null) {
        writeYourGenres = prompt('What genres are your favorite?');
    }
}
*/

