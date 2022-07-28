/* ---------------------------------------------------------------------- */
/* For In Loop                                                            */
/* ---------------------------------------------------------------------- */

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2022,
  hasOwnProperty : function(){
    return 'hahahaha'
  }
};


let key = 'creator'

Object.prototype.nickName = 'beom';

// console.log( key in javaScript);

/* for(const key in javaScript){
  console.log(key);

} */

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?


// 객체 자신의 속성인지 확인하는 방법


// - "자신(own)의 속성(property)인 확인(has) 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

//  메서드 빌려쓰기  call bind apply
// console.log(javaScript.hasOwnProperty.call(javaScript,key));
// console.log(Object.prototype.hasOwnProperty.call(javaScript,key));
// console.log(({}).hasOwnProperty.call(javaScript,key));


// for ~ in 문
// - 객체 자신의 속성만 순환하려면?

for(const key in javaScript){
  
  if(Object.prototype.hasOwnProperty.call(javaScript,key)){
    // console.log(key);
  }

  
}


// - 배열 객체 순환에 사용할 경우?

let tens = [10,100,1000,10000];

tens.description = '10의 나열';


//  배열에 for...in 문을 쓴다고 ? ㅋ 

for(const key in tens){

  let value = tens[key];
  
  if(Object.prototype.hasOwnProperty.call(tens,key)){
    console.log(key +':' + value);
  }

}









