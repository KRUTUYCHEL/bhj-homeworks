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
       e.preventDefault();
       sub.classList.add('menu_active');

     }

   }
 })
})
document.addEventListener('mousedown', (e) => {
  const allMenus = document.querySelectorAll('.menu_main');
  allMenus.forEach(checkMenu => {
    const clickedMenu = e.target.closest('.menu_main');
    if (clickedMenu !== checkMenu) {
      const subs = [...checkMenu.querySelectorAll('.menu_sub')];
      subs.forEach(x => x.classList.remove('menu_active'));
    }
  })


});