const element = document.getElementById('timer');
let second = +element.innerText;

 const id = setInterval(() => {
  element.innerHTML = --second;
   if (second < 1){
     clearInterval(id);
     alert('Вы победили в конкурсе!')
   }
},1000);

