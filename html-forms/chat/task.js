const redButton = document.querySelector(".chat-widget__side");
const chatVisible = document.querySelector(".chat-widget");
const chatContainer = document.querySelector(".chat-widget__messages-container")
redButton.addEventListener('click', () => {
  chatVisible.classList.add("chat-widget_active")
});

const messageField = document.getElementById("chat-widget__messages");

const addMessage = (text,isRobot) => {
  let clientClass = isRobot ? '' : 'message_client';
  let currentTime = new Date();
  let hours = currentTime.getHours().toString().padStart(2, '0');
  let minutes = currentTime.getMinutes().toString().padStart(2, '0');
  let seconds = currentTime.getSeconds().toString().padStart(2, '0');

  messageField.innerHTML += `
  <div class="message ${clientClass}">
    <div class="message__time">${hours}:${minutes}:${seconds}</div>
    <div class="message__text">
      ${text}
    </div>
  </div>
`;
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

const inputEl =  document.getElementById("chat-widget__input");

 inputEl.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && inputEl.value.trim() !== '') {
 addMessage(inputEl.value, false)
    inputEl.value = '';
  addMessage(getRandomText(), true)
  }
 })
const robotsText = [
'Продолжайте говорить. Я всегда зеваю, когда мне интересно.',
'Помните, когда я поинтересовался вашим мнением? Я тоже нет.',
'После общения с вами у меня появился комплекс полноценности.',
'Я бы согласился с вами. Но тогда мы оба были бы неправы.',
'Вы очень полезный. Жаль, что вы оставили свой талант, мозг и способности дома. Подпишись на наш новый крутой YouTube канал! Подписаться',
'Хорошо, что я вам не нравлюсь. Не у всех есть хороший вкус.',
'Если вас зовут не Google, то перестаньте делать вид, что все знаете.',
'Мне жаль, что я обидел, когда назвал вас тупым. Я думал, что вы уже знали.',
'Вы так интересно рассказывали, что я всего два раза заснул и выпил пять кружек кофе.']
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const getRandomText = () => {
   const index = getRandomInt(robotsText.length);
   return robotsText[index]
};

