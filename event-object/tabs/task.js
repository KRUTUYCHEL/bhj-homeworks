const menuTab = [...document.querySelectorAll('.tab')];
const contentTab =[...document.querySelectorAll('.tab__content')]

menuTab.forEach((menuEl, index) =>  menuEl.addEventListener('click', () => {
  menuTab.forEach(p => p.classList.remove('tab_active'))
  contentTab.forEach(p => p.classList.remove('tab__content_active'))
  menuEl.classList.add('tab_active');

  contentTab[index].classList.add("tab__content_active")
}));
