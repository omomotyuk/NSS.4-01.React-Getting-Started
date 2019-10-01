import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
//import AnimalCard from './animal/AnimalCard'
import AnimalList from './animal/AnimalList'
import AnimalDetail from './animal/AnimalDetail'
import AnimalForm from './animal/AnimalForm'
//only include these once they are built - previous practice exercise
import LocationList from './location/LocationList'
import LocationDetail from './location/LocationDetail'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'


class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />

        { /* updated route: `/animals` */}
        <Route exact path="/animals" render={(props) => {
          return <AnimalList {...props} />
        }} />

        {/* Make sure you add the `exact` attribute here */}
        {/*<Route exact path="/animals" render={(props) => {
          return <AnimalList />
        }} />
        */}
        <Route path="/animals/:animalId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
        }} />

        <Route exact path="/locations" render={(props) => {
          return <LocationList />
        }} />
        <Route path="/locations/:locationId(\d+)" render={(props) => {
          return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
        }} />

        <Route path="/employees" render={(props) => {
          return <EmployeeList />
        }} />

        <Route path="/owners" render={(props) => {
          return <OwnerList />
        }} />

        {/* Our shiny new route. */}
        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props} />
        }} />


      </React.Fragment>
    )
  }
}

export default ApplicationViews
