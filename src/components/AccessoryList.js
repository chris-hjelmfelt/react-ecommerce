import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../context';

export default class AccessoryList extends Component {
  render() {
    return (
      <>
        <div className="py-5">
          <div className="container">
            <Title title="accessories" />
            <div className="row">
              <ProductConsumer>
                {value => {
                  var accessories = value.products.filter(product => product.tags.includes("accessory"));
                  console.log(accessories);
                  return accessories.map(product => {
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
