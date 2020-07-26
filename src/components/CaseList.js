import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../context';

export default class CaseList extends Component {
  render() {
    return (
      <>
        <div className="py-5">
          <div className="container">
            <Title title="smartphone cases" />
            <div className="row">
              <ProductConsumer>
                {value => {
                  var cases = value.products.filter(product => product.tags.includes("cases"));
                  console.log(cases);
                  return cases.map(product => {
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
