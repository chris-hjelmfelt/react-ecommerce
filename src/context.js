import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';


const ProductContext = React.createContext(); // this comes with a Provider and a Consumer


class ProductProvider extends Component {
  state ={
    products: [],
    detailProduct: detailProduct
  };

  componentDidMount() {
    this.setProducts();
  };

  // get products by value instead of by reference 
  // this allows you to get original values later if needed
  // otherwise you could skip componentDidMount()
  // and just put products: storeProducts in the state
  setProducts =() => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = {...item};
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return {products:tempProducts}
    });
  };

  getItem = (id) => {
    const product = this.state.products.find(item  => item.id === id);
    return product;
  }

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return{detailProduct:product}
    });
  };

  addToCart = (id) => {
     console.log(`Hello from Add to Cart. Id is: ${id}`);
  };

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