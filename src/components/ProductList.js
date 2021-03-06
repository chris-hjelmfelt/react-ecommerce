import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../context';

export default class ProductList extends Component {
  render() {
    return (
      <>
        <div className="py-5">
          <div className="container">
            <Title title="smartphones" />
            <div className="row">
              <ProductConsumer>
                {value => {
                  var phones = value.products.filter(product => product.tags.includes("phone"));
                  console.log(phones);
                  return phones.map(product => {
                    return <Product key={product.id} product={product} />;
                  })
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </>
    )
  }
}
