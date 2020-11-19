// folosi pentru a grupa toate itemel intr-un array
export const addItemToCart = (cartItems, cartItemToAdd) => {
  //  gaseste primul item in array in functie de conditie
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  // verificam daca exista itemul
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

   // daca nu exista CartItem atunci vom return un nou array cu toate cartItem care exista acolo si un obiect
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

// sterge itemel cand catitatea este zero, si scade din catitate cand sun mai multe
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

// sterge itemele din cos indiferent de cantitate
export const filterItemFromCart = ( cartItems, item) =>
  cartItems.filter(cartItem => cartItem.id !== item.id);

// numarul total de itemelor si cantiatea totala a itemelor
export const getCartItemsCount = cartItems =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity,
    0
  );

// suma totala de plata
export const getCartTotal = cartItems =>
cartItems.reduce(
  (accumalatedQuantity, cartItem) =>
    accumalatedQuantity + cartItem.quantity * cartItem.price,
  0
)