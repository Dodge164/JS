"use strict";
/*
// синхронный код
console.log("Data request...");

// асинхронный код (через setTimeout / через сервер)
// через setTimeout
setTimeout(() => {
  console.log("Prepairing data...");

  const product = {
    name: "TV",
    price: 1313,
  };

  setTimeout(() => {
    product.status = "order";
    console.log(product);
  }, 2000);
}, 2000);

// с использованием промисов Promise, кот. обращается к серверу
// синхронный код
console.log("Data request...");

const request = new Promise(function (resolve, reject) {
  // асинхронный код (через setTimeout / через сервер)
  // через setTimeout (имитация асинхронного кода)
  setTimeout(() => {
    console.log("Prepairing data...");

    const product = {
      name: "TV",
      price: 1313,
    };

    resolve();
    }, 2000);
  });

  // метод then обрабатывает еще один положительный результат в Promise
  request.then(() => {
    console.log("Data received");
  });

  setTimeout(() => {
    product.status = "order";
    console.log(product);
  }, 2000);



// Модифицируем код выше
// синхронный код
console.log("Data request...");

const request = new Promise(function (resolve, reject) {
  // асинхронный код (через setTimeout / через сервер)
  // через setTimeout (имитация асинхронного кода)
  setTimeout(() => {
    console.log("Prepairing data...");

    const product = {
      name: "TV",
      price: 1313,
    };

    resolve(product);
  }, 2000);
});
  // метод then обрабатывает еще один положительный результат в Promise
  request.then((product) => {
    setTimeout(() => {
    product.status = "order";
    console.log(product);
  }, 2000);
  });


// Еще модифицируем код выше, который теперь будет выполнять
// promise и then по цепочке
// синхронный код
console.log("Data request...");

const request = new Promise((resolve, reject) => {
  // асинхронный код (через setTimeout / через сервер)
  // через setTimeout (имитация асинхронного кода)
  setTimeout(() => {
    console.log("Prepairing data...");

    const product = {
      name: "TV",
      price: 1313,
    };

    resolve(product);
  }, 2000);
});
// метод then обрабатывает еще один положительный результат в Promise
request
  .then((product) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        product.status = "order";
        resolve(product);
      }, 2000);
    });
  })
  .then((data) => {
    data.modify = true;
    return data;
  })
  .then((data) => {
    console.log(data);
  });


// Отрабатываем reject (если возникнет ошибка)
console.log("Data request...");

const request = new Promise((resolve, reject) => {
  // асинхронный код (через setTimeout / через сервер)
  // через setTimeout (имитация асинхронного кода)
  setTimeout(() => {
    console.log("Prepairing data...");

    const product = {
      name: "TV",
      price: 1313,
    };

    resolve(product);
  }, 2000);
});
// метод then обрабатывает еще один положительный результат в Promise
request
  .then((product) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        product.status = "order";
       // для теста заменяем эту строку, чтобы получить ошибку для reject
       // resolve(product);
       // этой 
       reject(); //<----
      }, 2000);
    });
  })
  .then((data) => {
    data.modify = true;
    return data;
  })
  .then((data) => {
    console.log(data);
  }).catch(() => {
    console.error("Error");
  });
  

// Добавляем finally
console.log("Data request...");

const request = new Promise((resolve, reject) => {
  // асинхронный код (через setTimeout / через сервер)
  // через setTimeout (имитация асинхронного кода)
  setTimeout(() => {
    console.log("Prepairing data...");

    const product = {
      name: "TV",
      price: 1313,
    };

    resolve(product);
  }, 2000);
});
// метод then обрабатывает еще один положительный результат в Promise
request
  .then((product) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        product.status = "order";
        resolve(product);
      }, 2000);
    });
  })
  .then((data) => {
    data.modify = true;
    return data;
  })
  .then((data) => {
    console.log(data);
  })
  .catch(() => {
    console.error("Error");
  })
  .finally(() => {
    console.log("Finally");
  });
*/

// методы all и race

const test = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), time);
  });
};

Promise.all([test(1000), test(2000)]).then(() => {
  console.log("all tests");
});

Promise.race([test(5000), test(1000)]).then(() => {
  console.log("fastest test only");
});
