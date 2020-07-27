import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProductList from './components/ProductList';
import CaseList from './components/CaseList';
import AccessoryList from './components/AccessoryList'; 
import SearchList from './components/SearchList'; 
import Details from './components/Details';
import Cart from './components/cart';
import Default from './components/Default'; 
import Modal from './components/Modal';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/phones" component={ProductList}></Route>
        <Route exact path="/cases" component={CaseList}></Route>
        <Route exact path="/accessories" component={AccessoryList}></Route>
        <Route exact path="/details" component={Details}></Route>
        <Route exact path="/cart" component={Cart}></Route>
        <Route exact path="/search" component={SearchList}></Route>
        <Route component={Default}></Route>
      </Switch>   
      <Modal />  
    </>
  );
}

export default App;
