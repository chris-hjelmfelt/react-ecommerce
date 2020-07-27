import React, { Component } from 'react';
import {FaSearch} from 'react-icons/fa';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';

export default class SearchBar extends Component {   
  constructor(props) {
    super(props);    
    this.state = {
      inputValue: ''
    };
  } 

  setInput(str) {
    this.setState(() => {
      return{inputValue: str}
    });
  }
  
  render() {
    return (
      <SearchWrapper>
        <div className="input-group">
          <input type="text" value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} className="form-control" placeholder="Search" />
          <div className="input-group-append">            
            <ProductConsumer>
              {value => (
                <Link to="/search" className="ml-auto">
                  <button className="btn btn-secondary" type="button" onClick={() => {value.updateSearchItems(this.state.inputValue); this.setInput("");}}>
                    <FaSearch />
                  </button> 
                </Link>                                
              )
              }              
            </ProductConsumer>
          </div>
        </div>
      </SearchWrapper>      
    );
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  
}

const SearchWrapper = styled.div `
  background: white;
  width: 100%;
  margin: auto;
  margin-top: 1rem;

  @media only screen and (min-width: 600px) {
    width: 75%;
  }

  @media only screen and (min-width: 600px) {
    width: 40%;
  }
`
