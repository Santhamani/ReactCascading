import React, { Component } from "react";
import "./home.css";


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={apiRes:""}
  }
  
  callApi(){
    fetch('/users')
    .then(res => res.text())
    .then(res => this.setState({apiRes: res}));
  }

  componentWillMount(){
    this.callApi()
    fetch('/users')
    .then(async response => {
        const data = await response.text();

        // check for error response
        if (!response.ok) {
            // get error message from body or default to response statusText
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        this.setState({ totalReactPackages: data })
    })
    .catch(error => {
        this.setState({ errorMessage: error.toString() });
        console.error('There was an error!', error);
    });
    
  }
  

  render(){
    return (
      <div className="Home">
        <div className="lander">
          <h1>Scratch</h1>
          <p>{this.state.apiRes}</p>
          <p>{this.state.totalReactPackages}</p>
        </div>
      </div>
    );
  }
  
}


export default App