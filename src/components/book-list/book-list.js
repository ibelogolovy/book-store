import React from 'react';
import BookListItem from '../book-list-item';
import "./book-list.css";

const BookList = ({ books, backLoading, onAddedToCart, onBookOpen }) => (
    <div className = {backLoading ? 'book-list-back book-list row' : 'book-list row'}>
      {
        books.map((book) => {
          const {id} = book;
          return (
            <div className="col-md-4" key={id}>
              <BookListItem
                  book = {book}
                  onAddedToCart = {() => onAddedToCart(id)}
                  onBookOpen = {() => {
                    return onBookOpen({ bookId: id, header: 'Book Description' });
                  }}/>
            </div>
          )
        })
      }
    </div>
);

export default BookList;
