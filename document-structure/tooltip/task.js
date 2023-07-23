const elements = document.querySelectorAll('a.has-tooltip');

elements.forEach(element => {
  element.addEventListener('click', showTooltip);
});

function showTooltip(event) {
  event.preventDefault();
  removeTooltip();
  const tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  tooltip.textContent = this.getAttribute('title');

  const elementRect = this.getBoundingClientRect();
  tooltip.style.top = `${elementRect.bottom}px`;
  tooltip.style.left = `${elementRect.left}px`;

  document.body.appendChild(tooltip);

  tooltip.classList.add('tooltip_active');

  document.body.addEventListener('click', removeTooltip);

  event.stopPropagation();
}

function removeTooltip() {
  const tooltip = document.querySelector('.tooltip');
  if (tooltip) {
    tooltip.remove();
  }

  const activeTooltip = document.querySelector('.tooltip_active');
  if (activeTooltip) {
    activeTooltip.classList.remove('tooltip_active');
  }

  document.body.removeEventListener('click', removeTooltip);
}