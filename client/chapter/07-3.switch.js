/* ---------------------------------------------------------------------- */
/* Switch                                                                 */
/* ---------------------------------------------------------------------- */


/*  eslint no-mixed-spaces-and-tabs : 'off'  */
const MORNING    = '아침',
      LUNCH      = '점심',
      DINNER     = '저녁',
      NIGHT      = '밤',
      LATE_NIGHT = '심야',
		  DAWN       = '새벽';

let thisTime = '밤';


/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

/* switch(thisTime){
  case MORNING : console.log('아침'); break;
  case LUNCH : console.log('점심') ;break;
  case DINNER : console.log('점심') ;break;
  case NIGHT : console.log('밤') ;break;
  case LATE_NIGHT : 
  case DAWN : console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'); break;
  default : console.log('asdasdasdasd');
}

 */


/* switch문 → if문 변환 --------------------------------------------------- */

/* if(thisTime === MORNING){
  console.log('아침')
}else if(thisTime === LUNCH){
  console.log('점심')
}else if(thisTime === DINNER){
  console.log('점심')
}else if(thisTime === NIGHT){
  console.log('밤')
}else if(thisTime === LATE_NIGHT || thisTime === DAWN){
  console.log('아침')
}
 */


/* switch vs. if -------------------------------------------------------- */

// 전달 값: 0 ~ 6
// 반환 값: '일' ~ '토'
// 요일을 반환하는 함수


function getDay(value){

  switch(value){
    case 0 : return '일';
    case 1 : return '월';
    case 2 : return '화';
    case 3 : return '수';
    case 4 : return '목';
    case 5 : return '금';
    case 6 : return '토';
    default: throw new Error('이상한 값이 들어왔습니다.!')
  }

}



//  getDay 함수를 이용해서 나온 결과값 -> 일 ~ 토
// 일,토 -> 주말이야 
// 나머지 -> 평일이야 

function isWeekend(value){

  let today = getDay(value);

  if(today === '일' || today === '토') return '주말이야'

  return '평일이야'

}


let randomDay = Math.floor(Math.random() * 6)





 