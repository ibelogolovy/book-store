import React, { Component } from 'react';
import PropTypes from "prop-types";
import './modal.css';

class Modal extends Component {

  onClose = () => {
    this.props.onClose && this.props.onClose();
  };

  onSubmit = () => {
    this.props.onSubmit && this.props.onSubmit();
  };

  _closeClickHandler = (event) => {
    if(event.nativeEvent.target.className==='my-modal')
    return this.onClose();
  }

  render() {
    const { header, onSubmitName} = this.props;
    if (!this.props.show) {
      return null;
    };
    return (
      <div className="my-modal" onClick={this._closeClickHandler}>
          <div className="modal-main" >
            <div className="modal-header">
              <h4>{ header }</h4>
              <div className="close fa fa-times fa-2" aria-hidden="true" onClick={this.onClose}></div>
            </div>
            <div className="content">{this.props.children}</div>
            <div className="actions">
              <button className="btn btn-info" onClick={this.onSubmit}>
                { onSubmitName }
              </button>
            </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};

export default Modal;
