/* ---------------------------------------------------------------------- */
/* Nullish Coalescing Operator                                            */
/* ---------------------------------------------------------------------- */

let emailAddress = 'kinntiger.naver.com'
let receivedEmailAddress;


if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}


// receivedEmailAddress = emailAddress === undefined || emailAddress === null ? 'user@company.io' : emailAddress;



// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.
// receivedEmailAddress = emailAddress ?? 'user@company.io'



// 논리합 연산자를 이용하기 

receivedEmailAddress = emailAddress || 'user@company.io'



/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환



let box = document.querySelector('.box');

let height = 0;

box.style.height =  (height ?? 100)  + 'px' 




