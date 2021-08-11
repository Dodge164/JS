function fnA() {
  let a = 1;
  function fnB() {
    let b = 2;
    function fnC() {
      let c = 3;

      console.log('fnC', a, b, c); // 1 2 3
    }
    fnC();
    console.log('fnB', a, b); // 1 2
  }
  fnB();
  console.log('fnA', a); // 1
}
fnA();
/* Смысл скопа в том, что для функции доступны элементы вышестоящих функций, но эта же функция не видит элементы функций, стоящих ниже нее */
