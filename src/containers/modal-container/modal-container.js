import React, { Component } from 'react';
import { modalDialogClosed, bookAddedToCart } from '../../actions';
import { connect } from 'react-redux';

import Modal from '../../components/modal';

class ModalContainer extends Component {

  render () {
    const { show, params, modalDialogClosed, bookAddedToCart, children } = this.props;
    const { header, bookId } = params ? params: {}; //отрефакторить с prop-types
    const onSubmitName = "Add to cart";

    return (<Modal onSubmitName = {onSubmitName} onSubmit = {()=>{bookAddedToCart(bookId);modalDialogClosed();}} onClose={ modalDialogClosed } show={ show } header={ header }>
      { React.cloneElement(children, params) }
    </Modal>);
  }
}

const mapStateToProps = ({ modalDialog: { show, params } }) => {
  return { show, params };
};

const mapDispatchToProps = {
  modalDialogClosed,
  bookAddedToCart
};


export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
