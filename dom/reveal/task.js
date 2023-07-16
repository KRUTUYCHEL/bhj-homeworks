const elem = [...document.querySelectorAll(".reveal")];
document.addEventListener('scroll',function ()  {
  elem.forEach((p) => {
    const posTop = p.getBoundingClientRect().top;
    p.classList.toggle('reveal_active', posTop + p.clientHeight <= window.innerHeight && posTop >= 0);
  })})