(()=>{
  const calcTotal = (prices: number[]):string =>{
    let total = 0;
    prices.forEach((item)=>{
      total += item;
    });
    return total.toString();
  }

  const printTotal = (prices: number[]):void =>{
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`);
  }

  printTotal([1,3,2,5]);

  //Usando el método reduce
  const calcSum = (prices: number[]): number => {
    return prices.reduce((total, price) => total + price, 0);
  };
  console.log(calcSum([10, 20, 30])); // 60
})();
