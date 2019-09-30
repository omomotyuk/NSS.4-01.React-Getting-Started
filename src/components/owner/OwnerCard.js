import React, { Component } from 'react';

class OwnerCard extends Component {

  myDelete = () => {
    alert("item deleted!")
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./owner.jpg')} alt="My Owner" />
          </picture>
          <h3>Owner: <span className="card-owner">{this.props.owner.name}</span></h3>
          <p></p>
          <button type="button" onClick={() => this.myDelete()}>Discharge</button>
        </div>
      </div>
    );
  }
}

export default OwnerCard;
