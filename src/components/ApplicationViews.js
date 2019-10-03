//import { Route } from 'react-router-dom'
import { Route, withRouter, Redirect } from "react-router-dom"
import React, { Component } from 'react'
import Home from './home/Home'
//import AnimalCard from './animal/AnimalCard'
import AnimalList from './animal/AnimalList'
import AnimalDetail from './animal/AnimalDetail'
import AnimalForm from './animal/AnimalForm'
import AnimalEditForm from './animal/AnimalEditForm'
import EmployeeEditForm from './employee/EmployeeEditForm'
import EmployeeDetail from './employee/EmployeeDetail'
import EmployeeList from './employee/EmployeeList'
import EmployeeWithAnimals from './employee/EmployeeWithAnimals'
//only include these once they are built - previous practice exercise
import LocationList from './location/LocationList'
import LocationDetail from './location/LocationDetail'
import LocationEditForm from './location/LocationEditForm'
import OwnerList from './owner/OwnerList'
import OwnerEditForm from './owner/OwnerEditForm'
import Login from './auth/Login'


class ApplicationViews extends Component {

  // Check if credentials are in local storage
  //returns true/false
  isAuthenticated = () => localStorage.getItem("credentials") !== null

  render() {
    return (
      <React.Fragment>

        <Route exact path="/" render={(props) => {
          return <Home />
        }} />

        <Route exact path="/animals" render={props => {
          if (this.props.user) {
            return <AnimalList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/animals/:animalId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
        }} />
        <Route path="/animals/:animalId(\d+)/edit" render={props => {
          return <AnimalEditForm {...props} />
        }}
        />


        <Route exact path="/locations" render={props => {
          if (this.props.user) {
            return <LocationList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/locations/:locationId(\d+)" render={(props) => {
          return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
        }} />
        <Route path="/locations/:locationId(\d+)/edit" render={props => {
          return <LocationEditForm {...props} />
        }}
        />


        <Route exact path="/employees" render={props => {
          if (this.props.user) {
            return <EmployeeList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        {/*<Route path="/employees" render={(props) => {
          return <EmployeeList {...props} />
        }} />*/}
        <Route exact path="/employees/:employeeId(\d+)/details" render={(props) => {
          return <EmployeeWithAnimals {...props} />
        }} />
        <Route path="/employees/:employeeId(\d+)/edit" render={props => {
          return <EmployeeEditForm {...props} />
        }}
        />


        <Route exact path="/owners" render={props => {
          if (this.props.user) {
            return <OwnerList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/owners" render={(props) => {
          return <OwnerList />
        }} />
        <Route path="/owners/:ownerId(\d+)/edit" render={props => {
          return <OwnerEditForm {...props} />
        }}
        />


        {/* Our shiny new route. */}
        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props} />
        }} />

        {/*//------------------------------------
        //pass the `setUser` function to Login component.*/}
        <Route path="/login" render={props => {
          return <Login setUser={this.props.setUser} {...props} />
        }} />

      </React.Fragment>
    )
  }
}

export default ApplicationViews
