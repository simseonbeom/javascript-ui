const button = document.querySelector('.button');
const close = document.querySelector('.close');

function jujeobList(nickName) {
  return [
    `대한민국 ${nickName} 보유국`,
    `나 몰랐는데 ${nickName} 좋아하네`,
    `${nickName} MBTI 검사하면 Cute나온다며`,
    `${nickName}? 솔직히 거품 아닌가요? 언빌리 '버블'`,
    `${nickName} 사진 보다가 심장 녹을까봐 냉동실에서 사진 보는 중이에요`,
  ];
}

function randomValue(max = jujeobList().length) {
  return Math.floor(Math.random() * max);
}

function getName() {
  let nickName;

  nickName = document.querySelector('#name').value;
  return nickName;
}

function showJujeobText(nickName) {
  if (!nickName) {
    $.show?.('.pop');
    return;
  }

  document.querySelector('.textField').textContent =
    jujeobList(nickName)[randomValue()];
}

function jujeobFunc() {
  showJujeobText(getName());
}

button.addEventListener('click', jujeobFunc);
close.addEventListener('click', () => {
  $.hide('.pop');
});
