import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import { FaCartPlus } from 'react-icons/fa';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import SearchBar from './SearchBar';

export default class Navbar extends Component { 
  state = {
    collapsed: true,
  };

  toggleNavbar = async () =>  {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    return (
      <>
      <NavWrapper className="navbar navbar-expand-lg navbar-dark px-sm-5">

        <Link to="/">
          <img src={logo} alt="logo" className="navbar-brand logo" />
        </Link>

        <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>        
        
        <div className={`${classOne}`}  id="navbarResponsive">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to="/phones" className="nav-link">Phones</Link>            
            </li>
            <li className="nav-item ml-5">
              <Link to="/cases" className="nav-link">Cases</Link>            
            </li>
            <li className="nav-item ml-5">
              <Link to="/accessories" className="nav-link">Accessories</Link>            
            </li>           
          </ul> 

          <Link to="/cart" className="ml-auto">
            <ButtonContainer>
              <span className="mr-2"><FaCartPlus /></span>            
              My Cart
            </ButtonContainer>
          </Link>  
        </div> 
                         
      </NavWrapper>
      <SearchBar />
      </>
    )
  }
}

const NavWrapper = styled.nav `
  background: var(--mainBlue);
  .nav-link{
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`