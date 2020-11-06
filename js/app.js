const $gender = document.querySelector('.gender');
const $job = document.querySelector('.job');

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