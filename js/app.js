const $gender = document.querySelector('.gender');
const $job = document.querySelector('.job');
const $next = document.querySelector('.gender > .next')
const $singer = document.querySelector('.singer');
const $start = document.querySelector('.start');
let jobKey = '';
//gender 선택 시작
let genderChoice ='';
//gender 선택 이벤트 핸들러 등록
$gender.onclick = e => {
  if(e.target.matches('.gender > next')) return;
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
  e.target.parentNode.classList.remove('active');
  $job.classList.add('active');
  console.log($job);
}
$job.onclick = e => {
  if (e.target.matches('.job > .prev')) {
    $job.classList.remove('active');
    $gender.classList.add('active');
  } else if (e.target.matches('.job > .singer')){
    jobkey = 'singer'
  } else if (e.target.matches('.job > .actor')) {
    jobkey = 'actor'
  } else if(e.target.matches('.job > .all')){
    jobkey = 'all'
  } else return;

  console.log(jobkey);
}
$start.onclick = () => {
  const NewidealType = idealType.filter(ideal => {
    return jobkey==='all'? ideal.gender === genderChoice : 
    ideal.gender === genderChoice && ideal.job === jobkey 
  })
}
