import React, { Component } from 'react';

class LocationCard extends Component {

  myDelete = () => {
    alert("item deleted!")
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./location.jpg')} alt="My Location" />
          </picture>
          <h3>Location: <span className="card-location">{this.props.location.address}</span></h3>
          <button type="button" onClick={() => this.myDelete()}>Discharge</button>
          <p></p>
        </div>
      </div>
    );
  }
}

export default LocationCard;
