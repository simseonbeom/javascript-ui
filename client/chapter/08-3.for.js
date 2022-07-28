/* ---------------------------------------------------------------------- */
/* For Loop                                                               */
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


// for 문 (순환)
// - 실행 흐름

/* for(let i = 0; i < frontEndDev.length; i++){
  console.log(frontEndDev[i]);
}
 */


// - 조건이 맞을 경우, 이어서(continue) 순환
// - 조건: SVG, jQuery는 출력하지 마세요.

/* for(let i = 0; i < frontEndDev.length; i++){
  
  let value = frontEndDev[i];

  if(value.toLowerCase().includes('svg') ||
     value.toLowerCase().includes('jquery')){
    continue
  }


  console.log(frontEndDev[i]);
} */




// - 조건이 맞을 경우, 순환 중단(break)
// - 조건: JavaScript 까지만 출력하세요.


for(
  let i = 0 ,
      l = frontEndDev.length; 
      i < l; 
      i++){
  
  let value = frontEndDev[i];
  

  
  
  if(value.toLowerCase().includes('jquery '.trim())){
    break;
  }

  

  console.log(frontEndDev[i]);
}


// - 성능 향상에 도움이 되는 팁



// for 문 (역순환)

/* let zero = 0;
for(let i = frontEndDev.length-1; zero < i; i--){
  console.log(frontEndDev[i]);
}
 */


// for(let i = frontEndDev.length, 
//         subject;
//    (subject = frontEndDev[--i]);){
//   console.log(subject);
// }










