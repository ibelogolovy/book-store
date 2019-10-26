import actionTypes from '../constants/actionTypes';

const updateCartItems = (cartItems, item, idx) => {
  // delete array item
  if (item.count === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1)
    ];
  };
  // add item to array
  if(idx === -1){
    return [
      ...cartItems,
      item
    ];
  };
  // update array item
  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1)
  ];
};

const updateCartItem = (book, item = {}, quantity = 1) => {
  const {
      id = book.id,
      count = 0,
      title = book.title,
      total = 0 } = item;
  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * book.price
  };
}

const updateOrder = (state, bookId, quantity) => {
  const { bookList: { books }, shoppingCart: { cartItems, orderTotal } } = state;
  const book = books.find(({ id }) => id === bookId);

  const itemIndex = cartItems.findIndex(({id}) => id === bookId);
  const item = cartItems[itemIndex];
  const newItem = updateCartItem(book, item, quantity);
  const newCartItems = updateCartItems(cartItems, newItem, itemIndex);

  return {
    orderTotal: orderTotal + quantity * book.price,
    cartItems: newCartItems,
    orderCount: newCartItems.length
  };
};


const updateShoppingCart = (state, action) => {

  if (state === undefined){
    return {
      cartItems: [],
      orderTotal: 0,
      orderCount: 0
    };
  };

  switch (action.type) {
    case actionTypes.BOOK_ADDED_TO_CART:
      return updateOrder(state, action.payload, 1);

    case actionTypes.ALL_BOOKS_REMOVED_FROM_CART:
      const item = state.shoppingCart.cartItems.find(({ id }) => id === action.payload);
      return updateOrder(state, action.payload, -item.count);

    case actionTypes.BOOK_REMOVED_FROM_CART:
      return updateOrder(state, action.payload, -1);

    default:
      return state.shoppingCart;
  }

};

export default updateShoppingCart;
