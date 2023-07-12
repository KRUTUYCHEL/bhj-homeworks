const start = document.getElementById("modal_main");
const fin = document.getElementById("modal_success");

start.classList = "modal modal_active";

const close = [...document.getElementsByClassName("modal__close")];

close.forEach((p) => p.addEventListener('click',()=>{
  p.closest('.modal_active').classList = "modal";
}));

const success = document.getElementsByClassName("show-success")
success[0].addEventListener('click',()=>{
  start.classList = "modal";
  fin.classList = "modal modal_active";
});