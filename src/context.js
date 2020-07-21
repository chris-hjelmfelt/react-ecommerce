import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';


const ProductContext = React.createContext(); // this comes with a Provider and a Consumer


class ProductProvider extends Component {
  state ={
    products: storeProducts,
    detailProduct: detailProduct
  }

  handleDetail = () => {
    console.log('Hello from Detail');
  }

  addToCart = () => {
     console.log("Hello from Add to Cart");
  }

  render() {
    return (
      <ProductContext.Provider value={{ 
        ...this.state,  
        handleDetail: this.handleDetail,
        addToCart: this.addToCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};