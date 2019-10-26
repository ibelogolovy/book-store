import React, { Component } from 'react';

import './book-item.css';

class BookItem extends Component {

  render () {

    const { book: { title, author, price, description, images } } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <img className = "img-fluid" src = { images[0].url } alt="cover"/>
          </div>
          <div className="col-9">
            <h4>{ title }</h4>
            <dl className="row">
              <dt className="col-sm-2">Author:</dt>
              <dd className="col-sm-10">{ author }</dd>
              <dt className="col-sm-2">Price:</dt>
              <dd className="col-sm-10">{ price }</dd>
              <dt className="col-sm-12">Description:</dt>
              <dd className="col-sm-12">{ description }</dd>
            </dl>
          </div>
        </div>
      </div>);
  }
}

export default BookItem;
