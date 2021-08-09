'use strict';
// GET
const requestURL = 'https://jsonplaceholder.typicode.com/users';

function sendRequest(method, url, body = null) {
  return fetch(url).then((response) => {
    return response.json();
  });
}
sendRequest('GET', requestURL)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

const body = { name: 'Al', age: 24 };

sendRequest('POST', requestURL, body)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// POST
const requestURL = 'https://jsonplaceholder.typicode.com/users';

function sendRequest(method, url, body = null) {
  const headers = {
    'Content-Type': 'application/json',
  };

  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers,
  }).then((response) => {
    // обрабатываем ошибку
    if (response.ok) {
      return response.json();
    }
    return response.json().then((error) => {
      const у = new Error('Something went wrong');
      e.data = error;
      throw e;
    });
  });
}

const body = { name: 'Al', age: 24 };

sendRequest('POST', requestURL, body)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
