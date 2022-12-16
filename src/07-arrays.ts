(()=>{
  const prices = [1,2,3,4,5, 'hola', true];
  //Sólo podemos ingresar elementos que estén dentro del conjunto
  //de valores válidos.
  // prices.push('associated')
  // prices.push(true);
  // prices.push({});

  prices.push(1);

  let products = ['hola', true];
  // products.push(12);

  let mixed: (number|string|boolean|object)[] = ['1,2'];
  mixed.push('test');
  mixed.push(true);
  //El caso de el tipo Object acepta tanto objetos como arrays
  mixed.push({});
  mixed.push([]);

  let numbers = [1,2,3,4,5,6,7,8];
  numbers.map(item => item*2)

})();
