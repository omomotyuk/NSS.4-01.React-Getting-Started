import React, { Component } from 'react';

class AnimalCard extends Component {

  myDelete = () => {
    alert("item deleted!")
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture>
          <h3>Name: <span className="card-petname">{this.props.animal.name}</span></h3>
          <p>Breed: {this.props.animal.breed}</p>
          {/*<button type="button" onClick={() => this.props.deleteAnimal(this.props.animal.id)}>Discharge</button>*/}
          <button type="button" onClick={() => this.myDelete()}>Discharge</button>
        </div>
      </div>
    );
  }
}

export default AnimalCard;
