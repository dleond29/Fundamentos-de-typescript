(()=>{
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function createProductToJson(
    title: string,
    createAt: Date,
    stock: number,
    size: Sizes,
  ){

    return{
      title,
      createAt,
      stock,
      size
    }
  }

  const producto1 = createProductToJson('P1', new Date, 12, 'M');
  console.log(producto1);
  console.log(producto1.title);
  console.log(producto1.createAt);

  const createProductToJsonV2 =
  (
    title: string,
    createAt: Date,
    stock: number,
    //Con el signo de pregunta indicamos que el parámetro es opcional
    size?: Sizes,
  ) => {
    return{
      title,
      createAt,
      stock,
      size
    }
  }

  const producto2 = createProductToJsonV2('P2', new Date, 12);
  console.log(producto2);
  console.log(producto2.title);
  console.log(producto2.createAt);
  console.log(producto2.size)
})();
