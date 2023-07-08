const menu = [...document.getElementsByClassName("menu__link")];

menu.forEach(p => {
 p.addEventListener('click', (e) => {
   const parent = p.closest('.menu__item');
   if (parent) {
     const sub = parent.querySelector('.menu_sub');
     if (sub) {
       const mainMenu = sub.closest('.menu_main');
       const subs = [...mainMenu.querySelectorAll('.menu_sub')];
       subs.forEach(x => x.classList.remove('menu_active'));

       sub.classList.add('menu_active');
       e.preventDefault();
     }
   }
 })
})
document.addEventListener('mousedown', () => {
  const subs = [...document.querySelectorAll('.menu_sub')];
  subs.forEach(x => x.classList.remove('menu_active'));
});