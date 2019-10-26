import React from 'react';
import './cart-table.css';
// import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bookAddedToCart, bookRemovedFromCart, allBooksRemovedFromCart, modalDialogOpened } from '../../actions';
import { compose } from '../../utils';

const noItemLabel = () => (
      <tr key = "noItemLabel">
              <td>No items</td>
      </tr>
);

const CartTable = (props) => {
  const { items, total, onIncrease, onDecrease, onDelete, onBookOpen} = props;
  const renderRow = (item, idx) => {
    const { id, title, count, total } = item;
    return (
      <tr key = {id}>
        <td>{idx+1}</td>
        <td>      
            <div onClick = { () => onBookOpen({ bookId: id , header: 'Book Description'}) }>{title}</div>
        </td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button
            onClick = {() => onDelete(id)}
            className = "btn btn-outline-danger btn-sm ">
            <i className="fa fa-trash-o" />
          </button>
          <button
            onClick = {() => onIncrease(id)}
            className = "btn btn-outline-success btn-sm">
            <i className="fa fa-plus-circle" />
          </button>
          <button
            onClick = {() => onDecrease(id)}
            className = "btn btn-outline-warning btn-sm">
            <i className="fa fa-minus-circle" />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="shopping-cart-table">
      <h2>Your order</h2>
      <table className = "table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          { items.length === 0 ? noItemLabel() : items.map(renderRow) }
        </tbody>
      </table>

      <div className = "total">
        Total: ${ total.toFixed(2) }
      </div>
    </div>
  );
};

const mapStateToProps = ( { shoppingCart: { cartItems, orderTotal} }) => {
  return {
    items: cartItems,
    total: orderTotal
  };
};

const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemovedFromCart,
    onDelete: allBooksRemovedFromCart,
    onBookOpen: modalDialogOpened
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onIncrease: (id) => dispatch(bookAddedToCart(id)),
//     onDecrease: (id) => dispatch(bookRemovedFromCart(id)),
//     onDelete: (id) => dispatch(allBooksRemovedFromCart(id))
//   };
// };

export default compose(

  connect(mapStateToProps, mapDispatchToProps)
)(CartTable);
