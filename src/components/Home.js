import React, { Component } from 'react';
import Title from './Title';
import {Link} from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="py-5">
          <div className="container">
            <Title title="welcome to mobile store" />
            <div className="row">
              <Link to="/phones">
                <div className="col-3">
                  <div className="img-container p-5">
                    <img src="./img/phones/google_pixel3a.jpg" alt="phones" className="card-img-top product-img-front" />
                  </div>
                  <div className="card-footer d-flex justify-content-between">
                    <p className="text-center mb-0">
                      Phones
                    </p>                
                  </div>
                </div>
              </Link>

              <Link to="/cases">
                <div className="col-3">
                  <div className="img-container p-5">
                    <img src="./img/cases/parallax_S10.jpg" alt="cases" className="card-img-top product-img-front" />
                  </div>
                  <div className="card-footer d-flex justify-content-between">
                    <p className="text-center mb-0">
                      Cases
                    </p>                
                  </div>
                </div>
              </Link>

              <Link to="/accessories">
                <div className="col-3">
                  <div className="img-container p-5">
                    <img src="./img/misc/oittie_holder.jpg" alt="accessories" className="card-img-top product-img-front" />
                  </div>
                  <div className="card-footer d-flex justify-content-between">
                    <p className="text-center mb-0">
                      Accessories
                    </p>                
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  }
}