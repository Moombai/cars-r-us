import React, { Component } from 'react';
import SalesStaff from './components/SalesStaff';
import CarDetails from './components/CarDetails';
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
      sellerLastName: "",
      carName: "",
      carColor: "",
      carPurchaseValue: ""
    }
  }

  handleInputChange = (event) => {
    // Handle data from two input fields
    this.setState({ [event.target.name]: event.target.value });
  }

  // copy seller state and update with controlled form data
  handleSellerFormSubmit = (event) => {
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

  handleCarsFormSubmit = (event) => {
    event.preventDefault();
    const carsCopy = [...this.state.cars];
    const name = this.state.carName;
    const color = this.state.carColor;
    const purchaseValue = this.state.carPurchaseValue;

    carsCopy.push({
      name: name,
      color: color,
      purchaseValue: purchaseValue
    });

    this.setState({
      cars: carsCopy
    });
  }

  handleSellerDelete = (name) => {
    this.setState((currentState) => {
      return {
        sellers: currentState.sellers.filter((seller) => seller.name !== name)
      }
    });
  }

  handleCarDelete = (carName) => {
    this.setState((currentState) => {
      return {
        cars: currentState.cars.filter((car) => car.name !== carName)
      }
    })
  }

  render() {
    return (
      <div className="">
        <p>Hello World</p>
        <SalesStaff
          firstName={this.state.sellerFirstName}
          lastName={this.state.sellerLastName}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleSellerFormSubmit}
          salesPeople={this.state.sellers}
          handleRecordDelete={this.handleSellerDelete}
        />

        <CarDetails
          carInformation={this.state.cars}
          carName={this.state.carName}
          carColor={this.state.carColor}
          carPurchaseValue={this.state.carPurchaseValue}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleCarsFormSubmit}
          handleRecordDelete={this.handleCarDelete}
        />
      </div>
    );
  }
}

export default App;
