import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { firstLetterCase } from '../../modules/helpers'

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
          <h3>Location: <span className="card-location">{firstLetterCase(this.props.location.address)}</span></h3>
          <Link to={`/locations/${this.props.location.id}`}><button>Details</button></Link>
          <button type="button" onClick={() => this.myDelete()}>Discharge</button>
          <p></p>
        </div>
      </div>
    );
  }
}

export default LocationCard;
