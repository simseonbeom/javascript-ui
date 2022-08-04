/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

// console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
// console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
// console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
// console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
// console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);

// let total;

// 함수 선언

function getZeroOrOne(){
  return Math.random() > 0.5 ? 1 : 0
}


function total(
    priceA,
    priceB,
    priceC = getZeroOrOne(),
    priceD = getZeroOrOne()
  ){

  return priceA + priceB + priceC + priceD
  
}





// console.log(total(100,100,100,100));

// 함수 호출

// 함수 값 반환

// 매개 변수

// 매개 변수 vs. 전달 인자

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값 (default parameter)

// 좋은 함수 작성 여건
// - 재사용성이 좋아야 한다.
// - 함수 코드는 가독성이 좋아야 한다. (이름과 매개변수 이름이 직관적이어야 한다.)
// - 함수 내부에는 가급적 한 개의 로직만 처리하는 것이 권장된다.


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;
// let rem;

// 1. pxValue / base 나눠야 rem 값이 나옴 -> 퉤 
// 2. variable + rem  
// 3. template literals

// let nickName = '선범';
// let age = 31;

// console.log( `안녕 나는 ${ 30 / 2}이야 내 나이는 31살이야` );


let value = '100px';


let string = 'aaa'



function rem(pxValue,base = 16){


  // if(typeof pxValue === 'string'){
  //   pxValue = parseInt(pxValue,10)
  // }

  
  typeof pxValue === 'string' && (pxValue = parseInt(pxValue,10)) 
  

  
  return `${pxValue / base}rem`;

}



console.assert(rem(32)  === '2rem')
console.assert(rem(32,10) === '3.2rem')
console.assert(rem('100px',10) === '10rem')


// pxValue 의 값이 string이라면?




// css(node: string, prop: string, value: number|strung) : string;
// let css;



// css(document.body,'color');

// getStyle(node: string, prop: string) : string;

function getStyle(node, prop){

  if(typeof node === 'string'){
    node = document.querySelector(node);
  }

  if(!node || node.nodeType !== document.ELEMENT_NODE){
    throw new Error('첫 번째 매개변수인 node는 ELEMENT_NODE이여야 합니다.');
  }

  if(typeof prop !== 'string'){
    throw new Error('두 번째 매개변수인 prop의 타입은 string 이여야 합니다.');
  }

  if(!(prop in document.body.style)){
    throw new Error('두 번째 매개변수인 prop는 CSS 표준 속성을 사용해야 합니다.');
  }

  
  return getComputedStyle(node).getPropertyValue(prop)
}

// console.log(getStyle('h1','color'));

// ✅ node의 값을 'h1'으로 받았을 경우

// ✅ node가 없거나 document.ELEMENT_NODE가 아닐 경우

// ✅ prop의 값이 string이 아닐 경우

// ✅ prop의 값이 sytle 속성이 아닐 경우




// console.log(getComputedStyle(document.body).getPropertyValue('font-size'));
// console.log(getComputedStyle(document.body)['font-size']);


//  node가 string 일 경우  
// node 값이 없을 경우 => 에러 표시  




// setStyle(node: string, prop: string, value: number|string) : string;

function setStyle(node,prop,value){

  if(typeof node === 'string'){
    node = document.querySelector(node);
  }

  if(!node || node.nodeType !== document.ELEMENT_NODE){
    throw new Error('첫 번째 매개변수인 node는 ELEMENT_NODE이여야 합니다.');
  }

  if(typeof prop !== 'string'){
    throw new Error('두 번째 매개변수인 prop의 타입은 string 이여야 합니다.');
  }

  if(!(prop in document.body.style)){
    throw new Error('두 번째 매개변수인 prop는 CSS 표준 속성을 사용해야 합니다.');
  }

  if(typeof value === 'number'){
    value = `${value}px`;
  }
  
  node.style.setProperty(prop,value);
  // node.style.prop = value;

}

// setStyle('h1','font-size',100) ;

// document.body.style.setProperty('font-size',30);





// function css(node,prop,value){

//   value ? ? ? ? 
//   getStyle()
//   setStyle()

// }




// css('h1','color')  => rgb(0,0,0);
// css('h1','color','red')  => h1의 글자 색상이 'red'로 적용



function css(node,prop,value){
  
  // if(!value){
  //   getStyle(node,prop)
  // }else{
  //   setStyle(node,prop,value)
  // }


  // 조건 ? 참 : 거짓

  // return !value ? console.log('get') : console.log('set')
  return !value ? getStyle(node,prop) : setStyle(node,prop,value)



  
}


// value의 값이 number가 아닌 경우













// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
const h1 = document.querySelector('h1');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');


// 2. h1의 폰트 사이즈를 가져온다.
let h1FontSize = parseInt(css(h1,'font-size'));


console.log(h1FontSize);

let count = 0;

function incre(){
  
  console.log(count);
  // setStyle(h1,'font-size',h1FontSize + count++);
  h1.style.fontSize = `${h1FontSize + (++count)}px`;

}




function decre(){

  console.log(count);
  h1.style.fontSize = `${h1FontSize + (--count)}px`;
}






// 3. 증가함수와 감소함수를 만든다.


// 4. 클릭이벤트에 바인딩



plus.addEventListener('click',incre)
minus.addEventListener('click',decre)


