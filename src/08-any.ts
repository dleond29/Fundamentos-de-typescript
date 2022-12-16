(()=>{
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = 'Product';
  myDynamicVar = null;
  myDynamicVar = {};

  myDynamicVar = 'hola';
  //Podemos hacer un cast para forzar el tipo de dato
  const rta = (myDynamicVar as string).toUpperCase();
  console.log(rta);

  myDynamicVar = 1212;
  //Otra forma de hacer un cast
  const rta2 = (<number>myDynamicVar).toFixed();
  console.log(rta2);
})()
