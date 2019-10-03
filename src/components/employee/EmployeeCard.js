import React, { Component } from 'react';

class EmployeeCard extends Component {

  myDelete = () => {
    alert("item deleted!")
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./employee.webp')} alt="My Employee" />
          </picture>
          <h3>Employee: <span className="card-employee-name">{this.props.employee.name}</span></h3>
          <button type="button" onClick={() => this.myDelete()}>Discharge</button>

          <button type="button"
            onClick={() => { this.props.history.push(`/employees/${this.props.employee.id}/details`) }}>Details</button>

          <p></p>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;
