import React, { Component } from "react"
import OwnerManager from "../../modules/OwnerManager"
import "../animal/AnimalForm.css"

class OwnerEditForm extends Component {
  //set the initial state
  state = {
    ownerName: "",
    breed: "",
    loadingStatus: true,
  };

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  updateExistingOwner = evt => {
    evt.preventDefault()
    this.setState({ loadingStatus: true });
    const editedOwner = {
      id: this.props.match.params.ownerId,
      name: this.state.ownerName,
      breed: this.state.breed
    };

    OwnerManager.update(editedOwner)
      .then(() => this.props.history.push("/owners"))
  }

  componentDidMount() {
    OwnerManager.get(this.props.match.params.ownerId)
      .then(owner => {
        this.setState({
          ownerName: owner.name,
          breed: owner.breed,
          loadingStatus: false,
        });
      });
  }

  render() {
    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="OwnerName"
                value={this.state.ownerName}
              />
              <label htmlFor="OwnerName">Owner name</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="breed"
                value={this.state.breed}
              />
              <label htmlFor="breed">Breed</label>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingOwner}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default OwnerEditForm
