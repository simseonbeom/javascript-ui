/* ---------------------------------------------------------------------- */
/* Functions → Expression                                                 */
/* ---------------------------------------------------------------------- */


// function calcTotal(moneyA, moneyB, moneyC, moneyD) {
//   return moneyA + moneyB + moneyC + moneyD;
// }

// let resultX = calcTotal(10000, 8900, 1360, 2100);
// let resultY = calcTotal(21500, 3200, 9800, 4700);
// let resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);



// for...in  => key 를 뽑아낸다.  0,1,2,3
// for...in 을 통해 value도 뽑아낼 수 있음 arguments[key] => value

// for...of 는 => value를 뽑아냄 


const calcTotal = function (moneyA, moneyB, moneyC, moneyD) {

  
  
  
  let total = 0;
   
  for(const value of arguments){
    
    

    total += value;
  }
  
  
  // for(let i = 0; i < arguments.length; i++){
    // total += arguments[i];
  // }


  return total;

}

console.log(calcTotal(10,20,30,40));


// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function(){};

// 함수 안에서만 접근 가능한 인자들의 집합 객체로서 배열과 유사하여 유사 배열 타입으로 분류되는 요소  -> arguments


  // arguments 객체를 사용해 함수의 매개변수 없이
  // arguments 아이템의 총합을 구하는 방식으로 코드 로직을 완성해보세요.

  // 힌트 1: arguments 유사 배열 객체이다.
  //        유사배열은 배열이 아니다. 배열의 능력을 활용할 수 없다.
  //        for 문을 사용하면 순환처리 값을 더해서 반환


  // 힌트 2: arguments 이터러블(iterable)로서 Symbol.iterator 메서드를 가진다.
  // for (let arg of arguments) total += arg;

// 익명 함수 표현식
let anonymousFunction = function(){

};


// 유명(이름을 가진) 함수 표현식

let namedFunction = function name(){
  
  
}




// 콜백 함수
// let callbackFunction;


function callbackFunction(){
  
}


// 함수 선언문 vs. 함수 (표현)식
  // - 식 안에서 선언은 사용할 수 없음. 반면 함수 식은 식 내부에서도 사용 가능
  // - 함수 선언은 반드시 이름이 필요하다. 반면, 함수 식은 이름이 없을 수도 있다.
  // - 스코프 호이스트(scope hoist) 시, 처리되는 방식의 차이 (선언은 몸체가 실행영역으로 끌어올려짐 / 식은 할당되는 값은 그대로, 이름만 끌어올려지는 현상을 보임)



// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
  // 함수가 선언 됨과 동시에 실행되는 것을 말한다.
  // JavaScript 함수는 그 자체로 '값'
  // 함수 값을 즉시 실행 (이름 호출 없이)
  // 침범을 막는다. (전역의 오염을 막는다.)


  let aa = 0;
/* 
  const css = (function() {

    // 비공개
    // getStyle
    const getStyle = function(node, prop) {
      if (typeof node === 'string') node = document.querySelector(node);
      return getComputedStyle(node, null).getPropertyValue(prop);
    };
    
    // setStyle
    const setStyle = function(node, prop, value) {
      if (typeof node === 'string') node = document.querySelector(node);
      console.log(node);
      node.style[prop] = value;
    };
  
    // 공개 API
    // css
    const css = function(node, prop, value) {
      if (!value) return getStyle(node, prop);
      setStyle(node, prop, value);
    }
  
    return css;
  
  })();

console.log(css(document.body,'color'));

 */











const css = (function(){
   
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


    function css(node,prop,value){

      return !value ? getStyle(node,prop) : setStyle(node,prop,value)

    
    }

 return css; 

})()  




console.log(css('h1','color'));









