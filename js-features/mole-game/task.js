const deadEl = document.getElementById('dead');
const lostEl = document.getElementById('lost')
let dead = 0;
let lost = 0;

const byClass = document.getElementsByClassName('hole')
print = () => {
  deadEl.innerHTML = dead;
  lostEl.innerHTML = lost;
}
checkWinOrLose = () => {
  if (dead > 9) {
    alert('Победа!')
    dead = 0; lost = 0;
    print();
  } else if (lost > 4){
    alert('Вы проиграли!')
    dead = 0; lost = 0;
    print();
  }
}

[...byClass].forEach(p => {
  p.addEventListener('click', () => {
    p.classList.contains('hole_has-mole') ? dead++ : lost++;
    print();
    checkWinOrLose();
  });
})
