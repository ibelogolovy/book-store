import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './header.css';


const Header = ({orderTotal, orderCount}) => {
  return (
    <header className = "shop-header row">
      <Link to="/">
        <div className="logo text-dark">Store</div>
      </Link>
      <Link to="/cart">
        <div className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart"/>
          { orderCount } items (${ orderTotal.toFixed(2)  })
        </div>
      </Link>
    </header>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal, orderCount }}) => {
  return{ orderTotal, orderCount };
};

export default connect(mapStateToProps)(Header);
