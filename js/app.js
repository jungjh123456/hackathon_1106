const $gender = document.querySelector('.gender');
const $job = document.querySelector('.job');
const $singer = document.querySelector('.singer');
let jobKey = '';
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}


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