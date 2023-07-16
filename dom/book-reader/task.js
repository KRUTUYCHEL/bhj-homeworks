const fontSizeElements = document.querySelectorAll('.font-size');


fontSizeElements.forEach(element => {
  element.addEventListener('click', function(event) {
    event.preventDefault();

    fontSizeElements.forEach(el => el.classList.remove('font-size_active'));

    this.classList.add('font-size_active');

    let book = document.querySelector('.book');

    book.classList.remove('book_fs-big', 'book_fs-small');

    let dataSize = this.dataset.size;
    if (dataSize === 'big') {
      book.classList.add('book_fs-big');
    } else if (dataSize === 'small') {
      book.classList.add('book_fs-small');
    }
  });
});


let colorElements = document.querySelectorAll('.color');


colorElements.forEach(element => {
  element.addEventListener('click', function(event) {
    event.preventDefault();

    let book = document.querySelector('.book');


    if (this.dataset.textColor) {

      book.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black');

      let textColor = this.dataset.textColor;
      book.classList.add(`book_color-${textColor}`);
    } else if (this.dataset.bgColor) {

      book.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white');

      let bgColor = this.dataset.bgColor;
      book.classList.add(`book_bg-${bgColor}`);
    }
  });
});