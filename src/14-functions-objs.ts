(()=>{
  // const login = (email: string, password: string) =>{
  //   console.log(email,password);
  // }
  //Pasar parámetro por parámetro
  // login('nico@nico.co', '122112')

  const login = (data: {
    email: string,
    password: string
  }) => {
    console.log(data.email, data.password);
  }
  login({
    email: 'nico@nico.co',
    password: '122112'
  })

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  const addProduct = (
    data: {
      title: string,
      createAd: Date,
      stock: number,
      size?: Sizes
    }
  )=>{
    products.push(data);
  }

  addProduct({
    title: 'Prod1',
    createAd: new Date(1994,6,13),
    stock: 100
  });

  console.log(products[0]);

  addProduct({
    title: 'Prod2',
    createAd: new Date(1965,10,24),
    stock: 2,
    size: 'XL'
  });

  console.log(products[1]);

})();
