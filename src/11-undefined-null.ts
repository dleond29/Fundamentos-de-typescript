(()=>{
  // let myNumber: number;
  // let myName: string;

  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 22;

  let myString: string | undefined = undefined;
  myString = 'hello';

  function hi(name: string | null){
    let hello = 'Hola ';
    if (name){
      hello += name;
    }else{
      hello += 'nobody';
    }
    console.log(hello);
  }

  function hiV2(name: string | null){
    let hello = 'Hola ';
    //Optional chaining (?.)
    hello += name?.toLowerCase() || 'nobody';
    console.log(hello);
  }

  hi('Diego');
  hi(null);

  hiV2('Diego');
  hiV2(null);
})();
