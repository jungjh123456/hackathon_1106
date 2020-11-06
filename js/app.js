const $gender = document.querySelector('.gender');
const $job = document.querySelector('.job');

//gender 선택 시작

const $gender = document.querySelector('.gender');
let genderChoice;

//gender 선택 이벤트 핸들러 등록
$gender.onclick = e => {
  if(e.target.matches ('.gender > .woman')){
    genderChoice = 'w'
  }
  else if(e.target.matches('.gender > .man')){
    genderChoice = 'm'
  } else return; 
}
//gender 선택 끝



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}


$job.onclick = e => {
  if (e.target.matches('.job > .prev')) {
    $job.classList.remove('active');
    $gender.classList.add('active');
  }
}