import React from 'react';

class RecordSale extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      selectedCar: 'Vauxhall Vectra',
      selectedSalesPerson: 'Will',
      buyerName: "",
      purchasePrice: ""
    };

    this.handleCarChange = this.handleCarChange.bind(this);
    this.handleSalesPersonChange = this.handleSalesPersonChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleCarChange(event) {
    this.setState({ selectedCar: event.target.value });
  }

  handleSalesPersonChange(event) {
    this.setState({ selectedSalesPerson: event.target.value });
  }

  // handle inputs for buyer name and purchase price
  handleInputChange(event) {
    console.log(event.target.value)
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <h2>Record a Sale</h2>
        <form onSubmit={(event) => (
          this.props.handleSubmit(
            event, this.state.selectedCar, 
            this.state.selectedSalesPerson, 
            this.state.buyerName, 
            this.state.purchasePrice)
        )}>
          <label>
            Which car was purchased:
            <select value={this.state.selectedCar} onChange={this.handleCarChange}>
              {
                this.props.carInformation.map((car, index) => (
                  <option value={car.name} name="carName" key={index}>{car.name}</option>
                ))
              }
            </select>
          </label>

          <br/>
          <label>
            Which saleperson completed the sale:
            <select value={this.state.selectedSalesPerson} onChange={this.handleSalesPersonChange}>
              {
                this.props.salesPeople.map((salesperson, index) => (
                  <option value={salesperson.name} name="carName" key={index}>{salesperson.name}</option>
                ))
              }
            </select>
          </label>

          <br/>
          <label>
            Buyer name:
          <input
            type="text"
            name="buyerName"
            value={this.state.buyerName} 
            onChange={this.handleInputChange} 
          />
          </label>

          <br />
          <label>
            Purchase price:
          <input
              type="text"
              name="purchasePrice"
              value={this.state.purchasePrice}
              onChange={this.handleInputChange}
            />
          </label>

          <br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default RecordSale;