import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./owner.jpg')} alt="My Owner" />
          </picture>
          <h3>Owner: <span className="card-owner">Menestrelli Dog Show</span></h3>
          <p></p>
        </div>
      </div>
    );
  }
}

export default OwnerCard;
