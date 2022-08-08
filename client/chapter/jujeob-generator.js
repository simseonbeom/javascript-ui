// 주접 생성기 만들기
// 1. 주접 리스트를 반환하는 함수 만들기
// 2. 1 ~ 리스트의 갯수까지 랜덤의 수를 반환하는 랜덤 함수 만들기
// 3. input에 입력한 value를 가져오는 함수 만들기
// 4. 화면에 보여지는 함수 만들기
// 5. 주접 함수 만들기

// 이름을 입력하지 않았을 경우 예외처리
// 팝업창을 띄워보자!

const arr = [1, 2, 3, 4, 5];

function jujeobList(nickName) {
  return [
    `대한민국 ${nickName} 보유국`,
    `나 몰랐는데 ${nickName} 좋아하네`,
    `${nickName} MBTI 검사하면 Cute나온다며`,
    `${nickName}? 솔직히 거품 아닌가요? 언빌리 '버블'`,
    `${nickName} 사진 보다가 심장 녹을까봐 냉동실에서 사진 보는 중이에요`,
  ];
}

function random(max = jujeobList().length) {
  return Math.floor(Math.random() * max);
}
