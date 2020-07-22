import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class Default extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
            <h1 className="display-3">404</h1>
            <h1>error</h1>
            <p className="text-capitalized">the requested URL <span className="text-danger text-lowercase">{this.props.location.pathname}</span>{" "} was not found</p>
            <Link to="/">
              <ButtonContainer>go to store</ButtonContainer>
            </Link>           
          </div>
        </div>
      </div>
    )
  }
}
