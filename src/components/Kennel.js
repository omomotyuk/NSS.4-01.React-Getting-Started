import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
//import AnimalList from './animal/AnimalList'

import "./Kennel.css"

class Kennel extends Component {
    state = {
        user: false
    }

    // Check if credentials are in local storage
    //returns true/false
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    setUser = (authObj) => {
        /*
          For now, just store the email and password that
          the customer enters into local storage.
        */
        sessionStorage.setItem(
            "credentials",
            JSON.stringify(authObj)
        )
        this.setState({
            user: this.isAuthenticated()
        });
    }

    clearUser = () => {
        sessionStorage.clear()

        this.setState({
            user: this.isAuthenticated()
        });

    }

    componentDidMount() {
        this.setState({
            user: this.isAuthenticated()
        })
    }

    render() {
        return (
            <>
                <NavBar user={this.state.user} clearUser={this.clearUser} />
                <ApplicationViews user={this.state.user}
                    setUser={this.setUser} />
            </>
        )
    }
}

export default Kennel
