import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./employee.webp')} alt="My Employee" />
          </picture>
          <h3>Employee: <span className="card-employee-name">Ringling Circus</span></h3>
          <p></p>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;
