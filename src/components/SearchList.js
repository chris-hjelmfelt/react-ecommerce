import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../context';

export default class SearchList extends Component {
  render() {
    return (
      <>
        <div className="py-5">
          <div className="container">
            <Title title="your search results" />
            <div className="row">
              <ProductConsumer>
                {value => {                  
                  return value.searchProducts.map(product => {
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
