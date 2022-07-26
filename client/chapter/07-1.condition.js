/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */



// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = 'No';

// 영화 볼거니?
let goingToWatchMovie = 'Yes';


if (didWatchMovie.includes('Yes')) {
  console.log('응 봤어');

} 
// else if 복수 조건 처리
else if (goingToWatchMovie.includes('Yes')) {
  console.log('재미있겠따!');

} 
// else 절(caluse)
else {
  console.log('그냥 안볼래 ~');
}






// 조건부 연산자 ' ? '

// 다중 조건부 연산자 식 ' ? '