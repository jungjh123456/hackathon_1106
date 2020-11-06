const $job = document.querySelector('.job');
const $wrap = document.querySelector('.wrap');
const $singer = document.querySelector('.singer');
const $next = document.querySelector('.next');
let jobKey = '';
//gender 선택 시작
const $gender = document.querySelector('.gender');
let genderChoice;

// 로고 애니메이션
$wrap.onclick = () => {
  $wrap.classList.add('loading');
};

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

// next 버튼을 누르면 gender에 active 삭제, job에 active 추가하는 이벤트 핸들러
$next.onclick = e => {
  if ( !genderChoice ) {
    alert('성별을 선택하세요!');
    return;
  };

$job.onclick = e => {
  if (e.target.matches('.job > .prev')) {
    $job.classList.remove('active');
    $gender.classList.add('active');
  } else if (e.target.matches('.job > .singer')){
    jobkey = 'singer'
  } else if (e.target.matches('.job > .actor')) {
    jobkey = 'actor'
  } else {
    jobkey = 'all'
  }
  console.log(jobkey);
}
};