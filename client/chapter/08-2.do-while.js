/* ---------------------------------------------------------------------- */
/* Do While Loop                                                          */
/* ---------------------------------------------------------------------- */

const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
];


// do ~ while 문 (역순환)
// ✅ - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// ✅ - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// ✅ - 사용자가 취소를 했을 경우와 요청된 횟수가 0보다 작을 경우, 
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// ✅ - 순환 중단


// let repeat = prompt('횟수')

/* do{

  if(!repeat){
    console.log('최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.');

    break;
  }

  console.log(repeat);
  repeat--;
}while(repeat)
 */

// do ~ while 문 (순환)

/* 
let i = 0;

do{

 


 if(!repeat || repeat <= 0 ){
  console.log('최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.');

  break;
}
 
console.log(i);
 i ++ ;

  

}while(i < repeat)


 */


// - 위 do ~ while 문을 순방향으로 순환되도록 설정


/* -------------------------------------------------------------------------- */


// 구현할 로직(logic)
// 선택한 요소의 다음 요소를 찾는 로직 구현 

// const ELEMENT_NODE = 1;
// const ATTRIBUTE_NODE = 2;
// const TEXT_NODE = 3;
// const COMMENT_NODE = 8;

// const first = document.querySelector('.first');
// const box01 = document.querySelector('.box01');


// let next = first;

// do{
//   next = next.nextSibling;
// }while(next.nodeType !== document.ELEMENT_NODE);




// 반복:시작 --------------------------------------------------------
// 요소의 다음 형제 노드를 찾음
// 그 형제 노드의 타입이 3(document.TEXT_NODE)이면
// 다시 그 형제 노드의 다음 형제 노드를 찾음

// 반복:종료 --------------------------------------------------------
// 반복 종료 조건: 그 형제 노드의 타입이 1(document.ELEMENT_NODE)이면 순환 종료


// 미션 

// 1. next 함수 로직을 만들어보세요 

// next(first) => 다음 노드가 선택되기를 기대 

function next(node){

  if(typeof node === 'string'){
    node = document.querySelector(node);
  }
  
  do{
    node = node.nextSibling;
  }while(node.nodeType !== document.ELEMENT_NODE);

  return node
}

console.log(next('.first'));



// 2. next 함수 로직을 참고하여 prev 함수를 작성해봅니다.


