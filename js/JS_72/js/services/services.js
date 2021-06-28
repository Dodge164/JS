// асинхронный код! Ждем выполнения с помощью async await
const postData = async (url, data) => {
  const result = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: data,
  });
  return await result.json();
};

// получение данных с сервера
const getResource = async (url) => {
  const result = await fetch(url);

  if (!result.ok) {
    throw new Error(`Could not fetch ${url}, status: ${result.status}`);
  }
  return await result.json();
};

export { postData };
export { getResource };