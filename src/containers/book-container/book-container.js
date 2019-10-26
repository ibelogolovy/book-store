import React, { Component } from 'react';

import ErrorIndicator from '../../components/error-indicator';
import Spinner from '../../components/spinner';
import BookItem from '../../components/book-item';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withBookstoreService } from '../../components/hoc';
import { fetchBook } from '../../actions';
import { compose } from '../../utils';

// import './book-container.css';

class BookContainer extends Component {


  componentDidMount() {
    this.props.fetchBook(this.props.bookId);
  }

  render() {
    const { book, loading, error } = this.props;

    if (error) {
      return <ErrorIndicator />;
    }

    if (loading) {
      return <Spinner />;
    }

    return (
        <BookItem book = {book} />
    );
  };
};

const mapStateToProps = ({ selectedBook: { book, loading, error }}) => {
  return { book, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return bindActionCreators({
    fetchBook: fetchBook(bookstoreService),
  }, dispatch);
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookContainer);
