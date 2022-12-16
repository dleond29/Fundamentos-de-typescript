(()=>{
  let userId: string | number;
  userId = 10;
  userId = 'asd';

  function greeting(mytext: string | number){
    if(typeof mytext === 'string'){
      console.log(`string ${mytext.toLowerCase()}`);
    }else{
      console.log(`number ${mytext.toFixed(1)}`);
    }
  }
  greeting('Diego');
  greeting(1234.121);

})();
