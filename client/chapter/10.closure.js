


const makeCount = (() => {
  
  let count = 0;  

  return function(){
    return ++count;
  };
})();


const repeat = makeCount();

 

const memo = (()=>{

  const cache = {}

  return (key,callback) =>{

    if (!key || typeof key !== 'string') {
      throw new TypeError(
        'memo 함수의 첫번째 인자는 string 타입만 허용합니다.'
      );
    }

    if(!callback) return cache[key];
    if (cache[key]) {
      return cache[key];
    } else {
      return cache[key] = callback();
    }

  }
  
})();


memo('plus',()=> document.querySelector('.plus'));
memo('nickName',()=> 'simseonbeom');






function orange(){


  memo('plus').style.background = 'orange'
  // memo('h1').style.background = 'orange'
  
}


function blue(){
  memo('plus').style.background = 'blue'
}



orange()


