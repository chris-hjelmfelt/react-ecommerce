import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';


const ProductContext = React.createContext(); // this comes with a Provider and a Consumer


class ProductProvider extends Component {
  state ={
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    searchString: "",
    searchProducts: []
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

  getItem = id => {
    const product = this.state.products.find(item  => item.id === id);
    return product;
  }

  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return{detailProduct:product}
    });
  };

  addToCart = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(() => {
      return {
        products: tempProducts, 
        cart: [...this.state.cart, product]
      };
    }, () => {   // this callback function won't run until the state is updated
      this.addTotals();
    });
  };

  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return {modalProduct:product, modalOpen: true}
    })
  };

  closeModal = () => {
    this.setState(() => {
      return {modalOpen: false}
    })
  };

  increment = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    this.setState(() => {
      return {
        cart:  [...tempCart]
      }
    }, () => {
      this.addTotals();
    });
  };

  decrement = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;
    if (product.count < 1) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(() => {
        return {
          cart:  [...tempCart]
        }
      }, () => {
        this.addTotals();
      });
    }
  };

  removeItem = id => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    this.setState(() => {
      return {
        cart: [...tempCart],
        products: [...tempProducts]
      }
    }, () => {
      this.addTotals();
    });
  };

  clearCart = () => {    
    this.setState(() => {
      return{cart: []}
    },() => {
      this.setProducts();
      this.addTotals();
    });
  };

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.06;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total
      }
    });
  };
  
  updateSearchItems = str => {
    this.setState(() => {
      return {searchString: str};   
    },() => {
      this.searchItems();
    });
  };

  searchItems = () => {    
    let p = [...this.state.products];
    for (let i=1; i < p.length; i++) {
      let item = {...p[i]};
      item.title = item.title.toLowerCase();
      p[i] = item;
    }
    const titleResult = p.filter(p => p.title.includes(this.state.searchString.toLowerCase()));
    const tagsResult = p.filter(p => p.tags.includes(this.state.searchString.toLowerCase()));
    const fullResult = tagsResult.concat(titleResult);
    const finalResult = [...new Set(fullResult)];  // remove duplicates
    this.setState(() => {
      return {searchProducts: finalResult};   
    });
  };

  render() {
    return (
      <ProductContext.Provider value={{ 
        ...this.state,  
        handleDetail: this.handleDetail,
        addToCart: this.addToCart,
        openModal: this.openModal,
        closeModal: this.closeModal,
        increment: this.increment,
        decrement: this.decrement,
        removeItem: this.removeItem,
        clearCart: this.clearCart,
        updateSearchItems: this.updateSearchItems
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};