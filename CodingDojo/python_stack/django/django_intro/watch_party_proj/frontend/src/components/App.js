import React, { Component } from "react";
import { render } from "react-dom";
// App Inherits from the Component class
export default class App extends Component {
    constructor(props) {
        // The constructor for App calls the superclass's constructor
        //  passing the argument props
        super(props);
    }

    render(){
        return (<h1>Testing React Code</h1>)
    }
}

const appDiv = document.getElementById("app")
render(<App />, appDiv);