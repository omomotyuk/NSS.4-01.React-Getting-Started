import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
//import AnimalList from './animal/AnimalList'

import "./Kennel.css"

class Kennel extends Component {
    render() {
        return (
            <>
                <NavBar />
                <ApplicationViews />
            </>
        )
    }
}

export default Kennel
