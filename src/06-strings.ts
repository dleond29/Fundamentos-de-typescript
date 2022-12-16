(()=>{
  let productTitle = "My amazing product";
  //Tipos de datos que no pueden ser asignados
  // productTitle = null;
  // productTitle = ()=>{};
  // productTitle = 123;

  productTitle = "My awesome product changed";
  console.log("productTitle", productTitle);

  //El uso de la comilla doble es útil cuando queremos agregar
  //el signo ' al escribir en inglés
  const productDescription = "I'm Diego and this is my product description";
  console.log("productDescription", productDescription);

  //Otra forma de poder escapar de caracteres
  let myName = 'Hi, I\'m Diego'
  console.log(myName) // Hi, I'm Diego

  let productPrice = 100;
  let isNew: boolean = false;

  //El backtick permite usar múltiples líneas y concatenar variables
  const summary = `
    tittle : ${productTitle}
    description : ${productDescription}
    price: ${productPrice}
    isNew : ${isNew}
  `;
  console.log("summary", summary);
})();
