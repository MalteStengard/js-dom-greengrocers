const state = {
  items: [
    {
      id: "001-beetroot",
      name: "beetroot",
      price: 0.35
    },
    {
      id: "002-carrot",
      name: "carrot",
      price: 0.35
    },
    {
      id: "003-apple",
      name: "apple",
      price: 0.35
    },
    {
      id: "004-apricot",
      name: "apricot",
      price: 0.35
    },
    {
      id: "005-avocado",
      name: "avocado",
      price: 0.35
    },
    {
      id: "006-bananas",
      name: "bananas",
      price: 0.35
    },
    {
      id: "007-bell-pepper",
      name: "bell pepper",
      price: 0.35
    },
    {
      id: "008-berry",
      name: "berry",
      price: 0.35
    },
    {
      id: "009-blueberry",
      name: "blueberry",
      price: 0.35
    },
    {
      id: "010-eggplant",
      name: "eggplant",
      price: 0.35
    }
  ],
  cart: []
};

function displaySelection() {
  console.log('function hit!');
  const itemList = document.getElementById('item-list-store--item-list');
  state.items.forEach(element => {
    const li = document.createElement('li');
    const img = document.createElement('img');

    img.src = `assets\\icons\\${element.id}.svg`; 
    img.alt = element.name;

    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    button.onclick = () => addToCart(element);

    li.textContent = element.name;
    li.className = 'store-item';

    li.appendChild(img)
    li.appendChild(button)
    itemList.appendChild(li);
  });
}

function addToCart(item) {
  const cartList = document.getElementById('item-list-cart--item-list'); // Corrected id selector
  console.log(`${item.name} added to cart!`);

  let cartItem = document.getElementById(`cart-${item.id}`);
  console.log(cartItem)
  if (cartItem) {
    // Increase the quantity
    let quantity = cartItem.querySelector('.quantity');
    quantity.textContent = parseInt(quantity.textContent) + 1;
  } else {

  const li = document.createElement('li');
  li.id = `cart-${item.id}`; // Assign a unique id to the cart item
  const img = document.createElement('img');
  img.src = `assets\\icons\\${item.id}.svg`; // Corrected path
  img.alt = item.name;

  const quantity = document.createElement('span');
  quantity.className = 'quantity';
  quantity.textContent = '1';

  const addButton = document.createElement('button');
  addButton.textContent = 'Add';
  addButton.onclick = () => addToCart(item);

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.onclick = () => {
    let currentQuantity = parseInt(quantity.textContent);
    if (currentQuantity > 1) {
      quantity.textContent = currentQuantity - 1;
    } else {
      cartList.removeChild(li);
    }
  };

  li.appendChild(img);
  li.appendChild(quantity);
  li.appendChild(addButton);
  li.appendChild(removeButton);
  cartList.appendChild(li);
  }
}


displaySelection();