const initDropdown = (dropdown) => {
  const valueEl = dropdown.querySelector('.dropdown__value');
  const listEl = dropdown.querySelector('.dropdown__list');
  let open = false;
  let value = valueEl.textContent.trim();

  const render = () => {
    if (open) {
      listEl.classList.add('dropdown__list_active');
    } else {
      listEl.classList.remove('dropdown__list_active');
    }
    valueEl.textContent = value;
  }
  valueEl.addEventListener('click', () => {
    open = !open;
    render();
  });
  listEl.addEventListener('click', (e) => {
    value = e.target.textContent.trim();
    open = false;
    e.preventDefault();
    render();
  });
  document.addEventListener('mousedown', e => {
    if (e.target.closest('.dropdown') !== dropdown) {
      open = false;
      render();
    }
  });
}


[...document.querySelectorAll('.dropdown')].forEach(p => initDropdown(p));