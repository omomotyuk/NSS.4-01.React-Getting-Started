import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalCard from './animal/AnimalCard'
import AnimalList from './animal/AnimalList'
//only include these once they are built - previous practice exercise
import LocationCard from './location/LocationCard'
import EmployeeCard from './employee/EmployeeCard'
import OwnerCard from './owner/OwnerCard'


class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route path="/animals" render={(props) => {
          return <AnimalList />
        }} />

        <Route path="/location" render={(props) => {
          return <LocationCard />
        }} />

        <Route path="/employee" render={(props) => {
          return <EmployeeCard />
        }} />

        <Route path="/owner" render={(props) => {
          return <OwnerCard />
        }} />

      </React.Fragment>
    )
  }
}

export default ApplicationViews
