//import { Route } from 'react-router-dom'
import { Route, withRouter, Redirect } from "react-router-dom"
import React, { Component } from 'react'
import Home from './home/Home'
//import AnimalCard from './animal/AnimalCard'
import AnimalList from './animal/AnimalList'
import AnimalDetail from './animal/AnimalDetail'
import AnimalForm from './animal/AnimalForm'
import AnimalEditForm from './animal/AnimalEditForm'
//only include these once they are built - previous practice exercise
import LocationList from './location/LocationList'
import LocationDetail from './location/LocationDetail'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
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
          if (this.isAuthenticated()) {
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
          if (this.isAuthenticated()) {
            return <LocationList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/locations/:locationId(\d+)" render={(props) => {
          return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
        }} />


        <Route exact path="/employees" render={props => {
          if (this.isAuthenticated()) {
            return <EmployeeList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/employees" render={(props) => {
          return <EmployeeList {...props} />
        }} />


        <Route exact path="/owners" render={props => {
          if (this.isAuthenticated()) {
            return <OwnerList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/owners" render={(props) => {
          return <OwnerList />
        }} />


        {/* Our shiny new route. */}
        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props} />
        }} />

        <Route path="/login" component={Login} />

      </React.Fragment>
    )
  }
}

export default ApplicationViews
