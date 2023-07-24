
// Получаем элемент корзины и контейнер продуктов корзины
const cart = document.querySelector('.cart');
const cartProducts = document.querySelector('.cart__products');

// Добавляем слушатель события клика на список продуктов
const productsList = document.querySelector('.products');
productsList.addEventListener('click', addToCart);

// Добавляем слушатель события клика на контейнер продуктов корзины
cartProducts.addEventListener('click', removeFromCart);

// Получаем элементы кнопок управления количеством товара
const quantityButtons = document.querySelectorAll('.product__quantity-control');


// Добавляем обработчики событий для кнопок управления количеством товара
quantityButtons.forEach(button => {
  button.addEventListener('click', () => {
    const quantityValue = button.closest('.product__quantity-controls')
      .querySelector('.product__quantity-value');
    const currentValue = parseInt(quantityValue.textContent);

    if (button.classList.contains('product__quantity-control_dec')) {
      // Уменьшаем количество товара на 1, но не меньше 1
      const newValue = Math.max(currentValue - 1, 1);
      quantityValue.innerText = newValue;

    } else if (button.classList.contains('product__quantity-control_inc')) {
      // Увеличиваем количество товара на 1
      const newValue = currentValue + 1;
      quantityValue.innerText = newValue;
    }
  });
});

// Функция для добавления продукта в корзину
function addToCart(event) {
  if (event.target.classList.contains('product__add')) {
    const product = event.target.closest('.product');
    const productId = product.dataset.id;
    const productTitle = product.querySelector('.product__title').textContent;
    const productImage = product.querySelector('.product__image').src;
    const productQuantity = parseInt(product.querySelector('.product__quantity-value').textContent);



    // Проверяем, существует ли продукт уже в корзине
    const existingProduct = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);
    if (existingProduct) {
      const existingProductQuantity = parseInt(existingProduct.querySelector('.cart__product-count').textContent);
      const newQuantity = existingProductQuantity + productQuantity;
      existingProduct.querySelector('.cart__product-count').textContent = newQuantity;
    } else {
      // Создаем новый элемент продукта корзины
      const cartProduct = document.createElement('div');
      cartProduct.classList.add('cart__product');
      cartProduct.dataset.id = productId;

      // Создаем элемент изображения продукта корзины
      const cartProductImage = document.createElement('img');
      cartProductImage.classList.add('cart__product-image');
      cartProductImage.src = productImage;
      cartProductImage.alt = '';

      // Создаем элемент количества продукта корзины
      const cartProductCount = document.createElement('div');
      cartProductCount.classList.add('cart__product-count');
      cartProductCount.textContent = productQuantity;

      // Создаем элемент кнопки удаления продукта
      const removeButton = document.createElement('button');
      removeButton.classList.add('cart__product-remove');
      removeButton.innerHTML = '&times;';

      // Добавляем элементы изображения и количества в элемент продукта корзины
      cartProduct.appendChild(cartProductImage);
      cartProduct.appendChild(cartProductCount);
      cartProduct.appendChild(removeButton);

      // Добавляем элемент продукта корзины в контейнер продуктов корзины
      cartProducts.appendChild(cartProduct);
    }

    // Показываем корзину и ее заголовок
    cart.classList.add('cart_active');

    // Сохраняем корзину в локальное хранилище
    saveCart();
  }
}

// Функция для удаления продукта из корзины
function removeFromCart(event) {
  if (event.target.classList.contains('cart__product-remove')) {
    const cartProduct = event.target.closest('.cart__product');
    cartProduct.remove();

    // Скрываем корзину и ее заголовок, если в корзине больше нет продуктов
    if (cartProducts.children.length === 0) {
      cart.classList.remove('cart_active');
    }

    // Сохраняем корзину в локальное хранилище
    saveCart();
  }
}

// Функция для сохранения корзины в локальное хранилище
function saveCart() {
  const cartProductIds = Array.from(cartProducts.children).map(cartProduct => {
    return cartProduct.dataset.id;
  });

  localStorage.setItem('cart', JSON.stringify(cartProductIds));
}

// Функция для загрузки корзины из локального хранилища
function loadCart() {
  const cartProductIds = JSON.parse(localStorage.getItem('cart'));

  if (cartProductIds) {
    cartProductIds.forEach(productId => {
      const product = document.querySelector(`.product[data-id="${productId}"]`);
      if (product) {
        const productTitle = product.querySelector('.product__title').textContent;
        const productImage = product.querySelector('.product__image').src;
        const productQuantity = parseInt(product.querySelector('.product__quantity-value').textContent);

        // Создаем новый элемент продукта корзины
        const cartProduct = document.createElement('div');
        cartProduct.classList.add('cart__product');
        cartProduct.dataset.id = productId;

        // Создаем элемент изображения продукта корзины
        const cartProductImage = document.createElement('img');
        cartProductImage.classList.add('cart__product-image');
        cartProductImage.src = productImage;
        cartProductImage.alt = '';

        // Создаем элемент количества продукта корзины
        const cartProductCount = document.createElement('div');
        cartProductCount.classList.add('cart__product-count');
        cartProductCount.textContent = productQuantity;

        const removeButton = document.createElement('button');
        removeButton.classList.add('cart__product-remove');
        removeButton.innerHTML = '&times;';

        // Добавляем элементы изображения и количества в элемент продукта корзины
        cartProduct.appendChild(cartProductImage);
        cartProduct.appendChild(cartProductCount);
        cartProduct.appendChild(removeButton);

        // Добавляем элемент продукта корзины в контейнер продуктов корзины
        cartProducts.appendChild(cartProduct);
      }
    });
  }

  // Показываем корзину и ее заголовок, если в корзине есть продукты
  if (cartProducts.children.length > 0) {
    cart.classList.add('cart_active');
  }
}

// Загружаем корзину из локального хранилища при загрузке страницы
window.addEventListener('load', loadCart);