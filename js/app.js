const $gender = document.querySelector('.gender');
const $job = document.querySelector('.job');
const $next = document.querySelector('.gender > .next')
const $singer = document.querySelector('.singer');
const $battle = document.querySelector('.battle');
const $h3 = document.querySelector('.battle h3');
let jobKey = '';
let count = 0;

//gender 선택 시작
let genderChoice;
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
    jobKey = '';
    genderChoice = '';
  } else if (e.target.matches('.job > .singer')){
    jobkey = 'singer'
  } else if (e.target.matches('.job > .actor')) {
    jobkey = 'actor'
  } else {
    jobkey = 'all'
  }
  console.log(jobKey);
}

console.log($battle);

$battle.onclick = e => {

  console.log(count);
  count = count + 1;
  ranDom(16);
  randomItem();
  if (count === 8) {
    $h3.textContent = '8강';
    ranDom(8);
    randomItem();
  } else if(count === 12) {
    $h3.textContent = '4강';
    ranDom(4);
    randomItem();
  } else if(count === 16){
    $h3.textContent = '결승'
    count = 0;
  }
}
let newArr = [
  { id: 1, job: 'singer', content: '김동현' , path: '../남자아이돌/김동현.jpg', gender: 'm' ,lank: 0},
  { id: 2, job: 'singer', content: '김상균' , path: '../남자아이돌/김상균.jpg', gender: 'm' ,lank: 0},
  { id: 3, job: 'singer', content: '김지범' , path: '../남자아이돌/김지범.jpg', gender: 'm' ,lank: 0},
  { id: 4, job: 'singer', content: '김태영' , path: '../남자아이돌/김태영.jpg', gender: 'm' ,lank: 0},
  { id: 5, job: 'singer', content: '대준' , path: '../남자아이돌/대준.jpg', gender: 'm' ,lank: 0},
  { id: 6, job: 'singer', content: '성민' , path: '../남자아이돌/성민.jpg', gender: 'm' ,lank: 0},
  { id: 7, job: 'singer', content: '슬로우모션' , path: '../남자아이돌/슬로우모션.jpg', gender: 'm' ,lank: 0},
  { id: 8, job: 'singer', content: '웨비' , path: '../남자아이돌/웨비.jpg', gender: 'm' ,lank: 0},
  { id: 9, job: 'singer', content: '이태용' , path: '../남자아이돌/이태용.jpg', gender: 'm' ,lank: 0},
  { id: 10,job: 'singer',  content: '재범' , path: '../남자아이돌/재범.jpg', gender: 'm' ,lank: 0},
  { id: 11,job: 'singer',  content: '정국' , path: '../남자아이돌/정국.jpg', gender: 'm' ,lank: 0},
  { id: 12,job: 'singer',  content: '제이홉' , path: '../남자아이돌/제이홉.jpg', gender: 'm' ,lank: 0},
  { id: 13,job: 'singer',  content: '최수빈' , path: '../남자아이돌/최수빈.jpg', gender: 'm' ,lank: 0},
  { id: 14,job: 'singer',  content: '포맨' , path: '../남자아이돌/포맨.jpg', gender: 'm' ,lank: 0},
  { id: 15,job: 'singer',  content: '포틴' , path: '../남자아이돌/포틴.jpg', gender: 'm' ,lank: 0},
  { id: 16,job: 'singer',  content: 'boy' , path: '../남자아이돌/boy.jpg', gender: 'm' ,lank: 0}
];
let numArr = [];

const ranDom = num => {
while (!(numArr.length === num)){
  while (1){
    let num = getRandomInt(0, num)
    if(!numArr.includes(num)){
     numArr.push(num);
     break;
    }   
  }
}
}

const randomItem = () => {
  newArr = newArr.map((item, i, arr) => arr[numArr[i]]);
}



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}


