import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./location.jpg')} alt="My Location" />
          </picture>
          <h3>Location: <span className="card-location">Dog Circus</span></h3>
          <p></p>
        </div>
      </div>
    );
  }
}

export default LocationCard;
