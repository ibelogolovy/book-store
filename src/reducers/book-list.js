import actionTypes from '../constants/actionTypes';

const updateBookList = (state, action) => {

  if (state === undefined){
    return {
      books: [],
      loading: true,
      error: null
    };
  };

  switch (action.type) {
    case actionTypes.FETCH_BOOKS_REQUESTED:
      return {
        ...state.bookList,
        loading:true,
        error: null
      };

    case actionTypes.FETCH_BOOKS_SUCCESS:
      return {
        books: action.payload,
        loading:false,
        error:null
      };

    case actionTypes.FETCH_BOOKS_ERROR:
      return {
        books: [],
        loading:false,
        error: action.payload
      };
    default:
      return state.bookList;
  }
};

export default updateBookList;
