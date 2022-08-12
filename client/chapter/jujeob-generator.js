// 주접 생성기 만들기
// 1. 주접 리스트를 반환하는 함수 만들기
// 2. 1 ~ 리스트의 갯수까지 랜덤의 수를 반환하는 랜덤 함수 만들기
// 3. input에 입력한 value를 가져오는 함수 만들기
// 4. 화면에 보여지는 함수 만들기
// 5. 주접 함수 만들기

// 이름을 입력하지 않았을 경우 예외처리
// - 값이 없을 경우
// - 빈칸이 있을 경우
// - 숫자 입력 시 

// 팝업창을 띄워보자!

// 1. 뭘 하는 함수인지 함수의 이름을 정한다 (동사) randerText
// 2. 함수가 어떤 매개변수를 받을지 정한다.
// randerText(node,text)  => 특정 node에 text 글자가 들어가길 
// 3. 함수의 로직을 구현한다.
// 4. 재사용 가능한 함수가 될 수 있는 방법을 생각한다.
// 5. 함수를 리펙토링 한다.
// 6. 함수가 실행됐을 때 원하는 기댓값이 나오는지 확인한다.




function jujeobList(nickName) {
  return [
    `대한민국 ${nickName} 보유국`,
    `나 몰랐는데 ${nickName} 좋아하네`,
    `${nickName} MBTI 검사하면 Cute나온다며`,
    `${nickName}? 솔직히 거품 아닌가요? 언빌리 '버블'`,
    `${nickName} 사진 보다가 심장 녹을까봐 냉동실에서 사진 보는 중이에요`,
  ];
}

function random(max = 6) {
  return Math.floor(Math.random() * max);
}


function getInputValue(node){
  return $.getNode(node).value
}


function randerText(node,text){
  $.getNode(node).textContent = text;
}




function jujeobGenerator(e){

  e.preventDefault();

  

  let name = getInputValue('#nameValue').trim();
  let jujeob = jujeobList(name)[random(jujeobList().length)]



  if(!name){
    // alert('이름을 입력후 확인버튼을 눌러주세요.');
    // $.show('.pop');
    // $.addClass('.pop','active');
    $.fadeIn('.pop');
    randerText('.notice','정확한 이름을 입력해 주세요.');
    return;
  }




  if(name.length >= 5){
    $.getNode('#nameValue').value = '';
    // $.show('.pop');
    // $.addClass('.pop','active');
    $.fadeIn('.pop');
    randerText('.notice','5글자 이하의 이름을 넣어주세요.');
    return;
  }


  randerText('.jujeobField',jujeob)
}




$.getNode('.button').addEventListener('click',jujeobGenerator);
$.getNode('.close').addEventListener('click',function(e){

  // $.hide('.pop');
  // $.removeClass('.pop','active');
    $.fadeOut('.pop');
  
});



































