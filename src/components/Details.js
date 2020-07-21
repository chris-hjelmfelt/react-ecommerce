import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const{id, company, img, info, price, title, inCart} = value.detailProduct;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>                  
                </div>
              </div>
              {/* end title */}
              {/* product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} alt="phone image" className="img-fluid" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3">
                  <h2 className="text-capitalize">model: {title}</h2>
                  <h4 className="text-title text-muted mt-3 mb-2 text-uppercase">made by: <span className="text-uppercase">{company}</span></h4>
                  <h4 className="text-blue text-capitalize"><strong>price: <span>$</span>{price}</strong></h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">some info about product:</p>
                  <p className="text-muted lead">{info}</p>
                  {/* buttons */}
                  <div>
                    <Link to='/'>
                      <ButtonContainer>
                        Back to Products
                      </ButtonContainer>
                    </Link>
                    <ButtonContainer cart onClick={() => {value.addToCart(id)}} disabled={inCart?true:false}>
                      {inCart ? "in cart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
              {/* end product info */}
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
