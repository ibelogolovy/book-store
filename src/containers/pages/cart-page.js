import React from 'react';
import CartTable from '../../components/cart-table';
import BookContainer from '../book-container';
import ModalContainer from '../modal-container';

const CartPage = () => {


  return (
    <div className="container-fluid">
        <CartTable />
        <ModalContainer >
          <BookContainer  />
        </ModalContainer >
    </div>
  );

};



export default CartPage;
