
const signinForm = document.getElementById('signin__form');
const welcomeBlock = document.getElementById('welcome');
const userIdSpan = document.getElementById('user_id');
const logoutButton = document.getElementById('logout__btn');
const formaInput = document.getElementById("signin");

signinForm.addEventListener('submit', handleSignIn);

logoutButton.addEventListener('click', handleLogout);

const savedUserId = localStorage.getItem('user_id');
if (savedUserId) {
  showWelcomeBlock(savedUserId);
}
function handleSignIn(event) {
  event.preventDefault();
  const loginInput = document.querySelector('input[name="login"]');
  const passwordInput = document.querySelector('input[name="password"]');
  const login = loginInput.value;
  const password = passwordInput.value;
  loginInput.value = '';
  passwordInput.value = '';
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status <= 299) {
      const response = JSON.parse(xhr.responseText);
      if (response.success) {
        const userId = response.user_id;
        saveUserId(userId);
        showWelcomeBlock(userId);
      } else {
        alert('Неверный логин/пароль');
      }
    } else {
      alert('Ошибка сервера');
    }
  };
  xhr.send(JSON.stringify({ login, password }));
}

function saveUserId(userId) {
  localStorage.setItem('user_id', userId);
}

function showWelcomeBlock(userId) {
  userIdSpan.textContent = userId;
  welcomeBlock.classList.add('welcome_active');
  formaInput.classList.remove('signin_active');
}

function handleLogout() {
  localStorage.removeItem('user_id');
  welcomeBlock.classList.remove('welcome_active');
  formaInput.classList.add('signin_active');
}