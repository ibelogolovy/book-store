import actionTypes from '../constants/actionTypes';

// action creators
const booksLoaded = (newBooks) => {
  return {
    type: actionTypes.FETCH_BOOKS_SUCCESS,
    payload: newBooks
  };
};

const bookLoaded = (book) => {
  return {
    type: actionTypes.FETCH_BOOK_SUCCESS,
    payload: book
  };
};

const bookRequested = () => {
  return {
    type: actionTypes.FETCH_BOOK_REQUESTED
  };
};

const booksRequested = () => {
  return {
    type: actionTypes.FETCH_BOOKS_REQUESTED
  };
};

const booksError = (error) => {
  return {
    type: actionTypes.FETCH_BOOKS_ERROR,
    payload: error
  };
};

const bookError = (error) => {
  return {
    type: actionTypes.FETCH_BOOK_ERROR,
    payload: error
  };
};

const bookAddedToCart = (bookId) => {
  return {
    type: actionTypes.BOOK_ADDED_TO_CART,
    payload: bookId
  };
};

const bookRemovedFromCart = (bookId) => {
  return {
    type: actionTypes.BOOK_REMOVED_FROM_CART,
    payload: bookId
  };
};

const allBooksRemovedFromCart = (bookId) => {
  return {
    type: actionTypes.ALL_BOOKS_REMOVED_FROM_CART,
    payload: bookId
  };
};

const modalDialogOpened = (params) => {
  return {
    type: actionTypes.MODAL_OPENED,
    payload: params
  };
};

const modalDialogClosed = (params) => {
  return {
    type: actionTypes.MODAL_CLOSED,
    payload: params
  };
};


const fetchBooks = (bookstoreService) => () => (dispatch) => {
  dispatch(booksRequested());
  bookstoreService.getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((error) => dispatch(booksError(error)));
};

const fetchBook = (bookstoreService) => (id) => (dispatch) => {
  dispatch(bookRequested());
  bookstoreService.getBook(id)
    .then((data) => dispatch(bookLoaded(data)))
    .catch((error) => dispatch(bookError(error)));
};

export {
  fetchBooks,
  fetchBook,
  bookAddedToCart,
  bookRemovedFromCart,
  allBooksRemovedFromCart,
  modalDialogOpened,
  modalDialogClosed
};
