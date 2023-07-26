const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Отменяем стандартное поведение формы
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.upload.addEventListener('progress', (event) => {
    if (event.lengthComputable) {
      const percentComplete = (event.loaded / event.total) * 100;
      progress.value = percentComplete;
    }
  });
  xhr.addEventListener('load', () => {
    // Загрузка завершена
    progress.value = 100;
    alert('Файл успешно загружен!');
  });
  xhr.addEventListener('error', () => {
    // Ошибка загрузки
    alert('Произошла ошибка при загрузке файла.');
  });

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
  xhr.send(formData);
});