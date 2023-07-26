
const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

// Загружаем случайный опрос
function loadRandomPoll() {

  fetch('https://students.netoservices.ru/nestjs-backend/poll')
    .then(response => response.json())
    .then(data => {
      // Отображаем вопрос и список ответов
      displayPoll(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function displayPoll(data) {
  // Отображаем заголовок опроса
  pollTitle.textContent = data.data.title;


  data.data.answers.forEach((answer, index) => {
    const answerButton = document.createElement('button');
    answerButton.classList.add('poll__answer');
    answerButton.textContent = answer;
    answerButton.addEventListener('click', () => {
      vote(data.id, index);
    });
    pollAnswers.appendChild(answerButton);
  });
}

function vote(pollId, answerIndex) {

  fetch('https://students.netoservices.ru/nestjs-backend/poll',{
    method: 'POST',
    body: new URLSearchParams({
      'vote': pollId,
      'answer': answerIndex
    }),
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    }
  })
    .then(response => response.json())
    .then(data => {
      // Показываем сообщение о голосовании
      alert('Спасибо, ваш голос засчитан!');
      // Загружаем результаты голосования
      displayPollResults(data.stat);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function displayPollResults(results) {
  // Очищаем контейнер с ответами
  pollAnswers.innerHTML = '';

  results.forEach(result => {
    const resultItem = document.createElement('div');
    resultItem.classList.add('poll__result');
    resultItem.textContent = `${result.answer}: ${result.votes} голосов`;
    pollAnswers.appendChild(resultItem);
  });
}

window.addEventListener('load', loadRandomPoll);