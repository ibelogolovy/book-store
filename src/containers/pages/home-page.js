import React from 'react';
import BookListContainer from '../book-list-container';
import BookContainer from '../book-container';
import ModalContainer from '../modal-container';

const HomePage = () => {
  return (
    <div className="container-fluid">
      <BookListContainer  />
      <ModalContainer >
        <BookContainer  />
      </ModalContainer>
    </div>
  );
};

export default HomePage;
