import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';

import './App.css';

class App extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    pictureQuery: '',
  };

  handleFormSubmit = (pictureQuery) => {
    this.setState({pictureQuery});
  };

  render() {
    const { pictureQuery } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery query={pictureQuery} />
        {/* <Modal /> */}
        <ToastContainer position="top-center" autoClose={2000}/>
      </div>
    )
  }
};

export default App;
