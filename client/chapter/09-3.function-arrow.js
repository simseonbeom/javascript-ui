/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */

// ...spread oparator
// rest parameter

const calc = function (a,b,c,d){
  
  
  
  // let arr = Array.prototype.slice.call(arguments);
  let arr = Array.from(arguments);

  // console.log();

  let total = 0;
  // arr.forEach((item,index,arr) =>total += item)


  return arr.reduce((acc,current) => acc + current,10)


  // forEach => undefined
  // map => 배열을 순환해서 새로운 배열을 만들때 
  // reduce => 배열을 순환해서 다른 무언가를 만들때 

  
}

const calculateTotal = (...restArg) => {
  
  // console.log(restArg);
  /* let total = 0;
  restArg.forEach((t,i)=>{
    console.log('target : ' + t, 'index :' + i);

    total += t;
    
  })


  return total; */

  // return restArg.map( (x)=> {return x * 2})
  
  return restArg.reduce((acc,current,index,arr)=> {
    
    acc[index] = current;

    return acc;
    
  },{})


  // return moneyA + moneyB + moneyC + moneyD;
}




// console.log(calc(10,20,30,40));
console.log(calculateTotal(10,20,30,40));

// const calculateTotal = (moneyA, moneyB, moneyC, moneyD) => moneyA + moneyB + moneyC + moneyD;
// const calcTotal = (moneyA, moneyB, moneyC, moneyD) => moneyA + moneyB + moneyC + moneyD;

// let resultX = calcTotal(10000, 8900, 1360, 2100);
// let resultY = calcTotal(21500, 3200, 9800, 4700);
// let resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);



// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney;

// 화살표 함수와 this

const navigationMenu = {
  name: '글로벌 내비게이션',
  items: [
    { id: 'link-g', text: 'Google', link: 'https://google.com' },
    { id: 'link-n', text: 'Naver', link: 'https://naver.com' },
  ],
  getItem(index) {
    console.log(this);
    return this.items[index];
  },
  addItem: (newItem) => {
    console.log(this);
    this.items.push(newItem);
  },
};



// window

const beom = {
  aa(){
    console.log(this);
  },
  bb:()=>{
    console.log(this);
  },

  cc:{
    dd : ()=>{
      console.log(this);
    }
  }
}

beom.cc.dd();

const plus = document.querySelector('.plus');

let toggle = true;
plus.addEventListener('click',function (){
  
  toggle ? this.style.color = 'red' : this.style.color = 'black'

  toggle = !toggle;
})

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
// let pow; 

 


function pow(x,n){

    
  let result = 1;

  for(let i = 0; i < n; i++){
    
      result *= x;
  }
  
  
  
  return result;
}



const powExpression = (numeric,powCount) =>  Array(powCount).fill(null).reduce((acc)=> numeric * acc  ,1)





console.log(powExpression(2,5));







// console.log(pow(2,3));
// console.assert(pow(2,3) === 8);

// repeat(text: string, repeatCount: number): string;
let repeat = (text,repeatCount)=>{
  
  let result = '';

  for(let i = 0; i < repeatCount; i++){
    
      result += text
  }

  return result

}; 


console.log(repeat('hello🥲',3));


// repeat('hello😊',3); 'hello😊 * repeaCount'





/* 다음 함수를 작성해봅니다. -------------------------------------------------- */


// 주사위 굴리기 함수를 만들어봅니다.

// 주사위를 굴립니다.

// 굴려서 나온 주사위의 값이 홀수인지 짝수인지를 구분하는 함수를 작성해주세요.

// 주사위의 값이 홀/짝 인지 확인합니다.

// 주사위의 값이 홀수라면? 
// console패널에 주사위의 값이 '홀수' 임을 출력해주세요.

// 그렇지 않다면? (짝수라면)
// console패널에 주사위가 '홀수'가 아님 에러를 표시 합니다





/* 다음 함수를 작성해봅니다. -------------------------------------------------- */






