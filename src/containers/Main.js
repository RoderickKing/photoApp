// Favourites to be repaced by a google map
// Work started 20/06/2019
// Git branch CategoryChanges
//
import React, { Component, Fragment } from "react";
import PhotosContainer from "./PhotosContainer";
//import MapContainer from "./MapContainer";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ButtonsContainer from './ButtonsContainer';
//import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


const Main = (props) => {

  return (
    <Router>
      <Fragment>
        <Navbar />
        <ButtonsContainer />
        <Route exact path="/" component={PhotosContainer} />
      </Fragment>
    </Router>
  );

}

export default Main;
