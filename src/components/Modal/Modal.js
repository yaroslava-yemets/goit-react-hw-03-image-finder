import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return (
        <div className="Overlay">
            <div className="Modal">
                <img src="" alt="" />
            </div>
        </div>
    )
  }
}

export default Modal;