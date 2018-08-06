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
      salesInput: "",
      carInput: ""
    }
  }
  render() {
    return (
      <div className="">
        <p>Hello World</p>
        <SalesStaff salesInput={this.state.salesInput} salesPeople={this.state.sellers} />
      </div>
    );
  }
}

export default App;
