import actionTypes from '../constants/actionTypes';

const updateSelectedBook = (state, action) => {

  if (state === undefined){
    return {
      book: {},
      loading: true,
      error: null
    };
  };

  switch (action.type) {
    case actionTypes.FETCH_BOOK_REQUESTED:
      return {
        ...state.selectedBook,
        loading:true,
        error: null
      };

    case actionTypes.FETCH_BOOK_SUCCESS:
      return {
        book: action.payload,
        loading: false,
        error: null
      };

    case actionTypes.FETCH_BOOK_ERROR:
      return {
        book: {},
        loading:false,
        error: action.payload
      };
    default:
      return state.selectedBook;
  }
};

export default updateSelectedBook;
