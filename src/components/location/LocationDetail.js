import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
//import './LocationDetail.css'

class LocationDetail extends Component {

    state = {
        address: "",
        loadingStatus: true,
    }

    handleDelete = () => {
        //invoke the delete function in LocationManger and re-direct to the Location list.
        this.setState({ loadingStatus: true })
        LocationManager.delete(this.props.locationId)
            .then(() => this.props.history.push("/locations"))
    }

    componentDidMount() {
        console.log("LocationDetail: ComponentDidMount");
        //get(id) from LocationManager and hang on to that data; put it into state
        LocationManager.get(this.props.locationId)
            .then((location) => {
                this.setState({
                    address: location.address,
                    loadingStatus: false
                });
            });
    }

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={require('./location.jpg')} alt="Location pics" />
                    </picture>
                    <h3>Address: <span style={{ color: 'darkslategrey' }}>{this.state.address}</span></h3>
                    <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button>
                </div>
            </div>
        );
    }
}

export default LocationDetail;
