 const counterEl = document.getElementById("clicker__counter");
 const pictureEl = document.getElementById("cookie");
 const speedEl = document.getElementById("speed__counter");

 const NORMAL_PICTURE = 200;
 const BIG_PICTURE = 400;

 let counter = 0;
 let lastClick = 0;

 pictureEl.addEventListener('click',()=>{
  counter++;
  counterEl.innerHTML = counter;
  const currentTime = new Date().getTime()
  let speed = 1000/(currentTime-lastClick);
  lastClick = currentTime;
  speedEl.innerHTML = speed.toFixed(2);

  pictureEl.style.width = counter % 2 ? BIG_PICTURE+'px' : NORMAL_PICTURE+'px';
 });