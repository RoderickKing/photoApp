// Favourites to be repaced by a google map
// Work started 20/06/2019
//
import React, { Component, Fragment } from "react";
import PhotosContainer from "./PhotosContainer";
import FavouritesContainer from "./FavouritesContainer";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ButtonsContainer from './ButtonsContainer';


const Main = (props) => {

  return (
    <Router>
      <Fragment>
        <Navbar />
        <ButtonsContainer />
        <Route exact path="/" component={PhotosContainer} />
        <Route path="/favourites" component={FavouritesContainer} />
      </Fragment>
    </Router>
  );

}

export default Main;
