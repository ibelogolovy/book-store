import updateShoppingCart from './shopping-cart';
import updateBookList from './book-list';
import updateModalDialog from './modal-dialog';
import updateSelectedBook from './book';


const reducer = (state, action) => {
    return {
      selectedBook: updateSelectedBook(state,action),
      shoppingCart: updateShoppingCart(state,action),
      bookList: updateBookList(state,action),
      modalDialog: updateModalDialog(state, action)
    }
};

export default reducer;
