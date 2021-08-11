// immediate invoked function expression
let result = [];
for (var i = 0; i < 5; i++) {
  result.push(function () {
    console.log(i);
  });
}

result[2](); // 5 из-за ?области видимости var?
result[4](); // 5 из-за ?области видимости var?

// Решение этой проблемы
for (var i = 0; i < 5; i++) {
  (function () {
    var m = i;
    result.push(function () {
      console.log(m);
    });
  })();
}
result[2](); // 2
result[4](); // 4
