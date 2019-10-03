import React, { Component } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import './EmployeeDetail.css'

class EmployeeDetail extends Component {

    state = {
        name: "",
        imageUrl: "",
        loadingStatus: true,
    }

    handleDelete = () => {
        //invoke the delete function in EmployeeManger and re-direct to the Employee list.
        this.setState({ loadingStatus: true })
        EmployeeManager.delete(this.props.employeeId)
            .then(() => this.props.history.push("/employees"))
    }

    componentDidMount() {
        console.log("EmployeeDetail: ComponentDidMount");
        //get(id) from EmployeeManager and hang on to that data; put it into state
        EmployeeManager.get(this.props.employeeId)
            .then((employee) => {
                this.setState({
                    name: employee.name,
                    imageUrl: employee.imageUrl,
                    loadingStatus: false
                });
            });
    }

    render() {

        if (this.state.loadingStatus) {
            return <p>Loading...</p>
        }

        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={require(`./images/${this.state.imageUrl}`)} alt="employee pics" />
                    </picture>
                    <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
                    <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button>
                </div>
            </div>
        );
    }
}

export default EmployeeDetail;
