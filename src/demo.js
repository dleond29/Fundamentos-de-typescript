(async ()=> {
  const myCart = [];
  const products = [];
  const limit = 2246934;
  const url = ''

  async function getProducts() {
    const rta = await fetch(url, {
      method: 'GET'
    });
    const data = await rta.json();
    data.forEach(element => {
        products.push(element)
    });
  }
  function getTotal() {
    let total = 0;
    for (const element of products) {
      total += element.price;
    }
    return total;
  }
  function addProduct(index) {
    if (getTotal.length <= limit) {
      myCart.push(products[index]);
    }
  }

  await getProducts();
  addProduct(1);
  addProduct(2);
  const total = getTotal();
  console.log(total);
  const person = {
    name: 'Nicolas',
    lastName: 'Molina'
  }
  const rta = `Hey ${person.name} ${person.lastName}!, you have ${myCart.length} items in your cart`;
  console.log(rta);

//Para renderizar en HTML datos de Nicolas

const el = document.getElementById('content');
el ? el.textContent = rta : "";

})();
