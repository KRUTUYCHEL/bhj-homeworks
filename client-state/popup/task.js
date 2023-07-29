
const modal = document.createElement('div');
modal.classList.add('modal');
modal.id = 'subscribe-modal';

const modalContent = document.createElement('div');
modalContent.classList.add('modal__content');

const closeButtonA = document.createElement('div');
closeButtonA.classList.add('modal__close', 'modal__close_times');
closeButtonA.innerHTML = '&times;';

const modalText = document.createElement('div');
modalText.textContent = 'Подпишитесь на нашу рассылку пожалуйста!';
modalContent.appendChild(closeButtonA);
modalContent.appendChild(modalText);
modal.appendChild(modalContent);
document.body.appendChild(modal);

const modalElement = document.getElementById('subscribe-modal');
const closeButton = modalElement.querySelector('.modal__close');
const isModalClosed = document.cookie.includes('modalClosed=true');
if (!isModalClosed) {
  modalElement.classList.add('modal_active');
}
closeButton.addEventListener('click', () => {
  modalElement.classList.remove('modal_active');
  document.cookie = 'modalClosed=true';
});