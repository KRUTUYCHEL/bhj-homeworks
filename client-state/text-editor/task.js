
const editor = document.getElementById('editor');
const clearButton = document.getElementById('clearButton');

editor.value = localStorage.getItem('editorValue') || '';
editor.addEventListener('input', () => {
  localStorage.setItem('editorValue', editor.value);
});
clearButton.addEventListener('click', () => {
  editor.value = '';
  localStorage.removeItem('editorValue');
});