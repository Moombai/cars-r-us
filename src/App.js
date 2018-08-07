import React, { Component } from 'react';
import SalesStaff from './components/SalesStaff';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [
        {
          "name": "Vauxhall Vectra",
          "color": "blue",
          "purchaseValue": 1000
        },
        {
          "name": "Ferrari 458",
          "color": "red",
          "purchaseValue": 200000
        },
        {
          "name": "Volkswagen Golf",
          "color": "white",
          "purchaseValue": 3000
        }
      ],
      sellers: [
        {
          "name": "Will",
          "lastName": "Brown"
        },
        {
          "name": "Kevin",
          "lastName": "Yuco"
        }
      ],
      sales: [],
      formInput: "",
      sellerFirstName: "",
      sellerLastName: ""
    }
  }

  handleInputChange = (event) => {
    // Handle data from two input fields
    this.setState({ [event.target.name]: event.target.value });
  }

  // copy seller state and update with controlled form data
  handleFormSubmit = (event) => {
    event.preventDefault();
    const sellersCopy = [...this.state.sellers];
    const firstName = this.state.sellerFirstName;
    const lastName = this.state.sellerLastName;

    sellersCopy.push({ name: firstName, lastName: lastName });

    this.setState({
      sellers: sellersCopy
    })

    // reset form
    this.setState({ sellerFirstName: "" });
    this.setState({ sellerLastName: "" });
  }

  render() {
    return (
      <div className="">
        <p>Hello World</p>
        <SalesStaff
          firstName={this.state.sellerFirstName}
          lastName={this.state.sellerLastName}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          salesPeople={this.state.sellers}
        />
      </div>
    );
  }
}

export default App;
