import React, { Component, Fragment } from 'react';

import ErrorIndicator from '../../components/error-indicator';
import Spinner from '../../components/spinner';
import BookList from '../../components/book-list';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withBookstoreService } from '../../components/hoc';
import { fetchBooks, bookAddedToCart, modalDialogOpened } from '../../actions';
import { compose } from '../../utils';

import './book-list-container.css';

class BookListContainer extends Component {

  state = {
    backLoading: false
  };

  componentDidMount() {
    //this.setState({backLoading: true});
    this.props.fetchBooks();


    // // получаем данные из сервиса
    // const {
    //   bookstoreService,
    //   booksLoaded,
    //   booksRequested,
    //   booksError } =  this.props;
    //
    //  // booksRequested(); // требуется для обновления статуса loading в store
    //
    // bookstoreService.getBooks()
    // .then((data) => {
    //      // dispatch action to store
    //     this.setState({back_loading: false});
    //     booksLoaded(data);
    // })
    // .catch((error) => booksError(error));

  }

  render() {
    const { books, loading, error, onAddedToCart, onBookOpen} = this.props;

    if (error) {
      return <ErrorIndicator />;
    }

    return (
      <Fragment>
        {
          loading ? <div className = "spinner-back"><div className = "spinner-back-main"><Spinner/></div></div> : null
        }
        <BookList books = {books} backLoading = {loading} onAddedToCart = {onAddedToCart} onBookOpen = {onBookOpen} />
      </Fragment>

    );
  };
};



const mapStateToProps = ({ bookList: { books, loading, error }}) => {
  return{ books, loading, error };
};

// 1 вариант
// const mapDispatchToProps = (dispatch) => {
//   return {
//     booksLoaded: (newBooks) => {
//       dispatch({
//         type: 'BOOKS_LOADED',
//         payload: newBooks
//       });
//     }
//   };
// };

// 2 вариант
// const mapDispatchToProps = (dispatch) => {
//   return {
//     booksLoaded: (newBooks) => {
//       dispatch(booksLoaded(newBooks));
//     }
//   };
// };

// 3 более чистый вариант
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     booksLoaded
//   }, dispatch);
// };

// 4 вариант совсем простой
// const mapDispatchToProps = {
//   booksLoaded,
//   booksRequested,
//   booksError
// };

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return bindActionCreators({
    fetchBooks: fetchBooks(bookstoreService),
    onAddedToCart: bookAddedToCart,
    onBookOpen: modalDialogOpened
  }, dispatch);
};

// export default withBookstoreService()(
//   connect(mapStateToProps, mapDispatchToProps)(BookList)
// );

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
