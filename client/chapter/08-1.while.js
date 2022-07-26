/* ---------------------------------------------------------------------- */
/* While Loop                                                             */
/* ---------------------------------------------------------------------- */

const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
  'GSAP',
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
  'GSAP',
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
  'GSAP',
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
  'GSAP',
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
  'GSAP',
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
  'GSAP',
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
  'GSAP',
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
  'GSAP',
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
  'GSAP',
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
  'GSAP',
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
  'GSAP',
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
  'GSAP',
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
  'GSAP',
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
  'GSAP',
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
  'GSAP',
];



/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

// console.log(frontEndDev[0]);
// console.log(frontEndDev[1]);
// console.log(frontEndDev[2]);
// console.log(frontEndDev[3]);
// console.log(frontEndDev[4]);
// console.log(frontEndDev[5]);
// console.log(frontEndDev[6]);
// console.log(frontEndDev[7]);


/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)





let t0 = performance.now();

let i = 0;
while(i < frontEndDev.length){

  // ... 
  console.log(frontEndDev[i]);

  i++;
}

let t1 = performance.now();
console.log( '\t첫 번째' + (t1 - t0) + 'ms');




// while 문 (역순환 : 역방향)


let t2 = performance.now();

let e = frontEndDev.length -1;



while(e >= 0){

  console.log(frontEndDev[e]);

  // if(i <= 0) break;

  e--
}


let t3 = performance.now();
console.log('\t두 번째' +( t3 - t2) + 'ms');



// 변수를 사용하지 않고 frontEndDev 배열 만을 사용해 순환처리
/* 

 */

/* 

let copyArray = frontEndDev.slice();


while(copyArray.length){
  console.log(copyArray.shift());  // 정방향
  console.log(copyArray.pop()); // 역방향
}

 */

// 성능 진단 : 순환 vs. 역순환
