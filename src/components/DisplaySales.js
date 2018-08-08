import React from 'react';

class DisplaySales extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Will' };

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  // handleSubmit(event) {
  //   alert('Your favorite flavor is: ' + this.state.value);
  //   event.preventDefault();
  // }

  render() {
    return (
      <div>
        <h2>Display Sales Component</h2>
        {/* <form onSubmit={this.handleSubmit}> */}
        <form onSubmit={this.handleSubmit}>
          <label>
            Select a salesperson:
            <select value={this.state.value} onChange={this.handleChange}>
              {
                this.props.sellers.map((seller, index) => (
                  <option value={seller.name} key={index}>{seller.name}</option>
                ))
              }
            </select>
          </label>
          {/* <input type="submit" value="Submit" /> */}
        </form>
        <div>
          <h3>Seller Sales</h3>
          <table id="saleTable">
            <thead>
              <tr>
                <th>Seller</th>
                <th>Car</th>
                <th>Buyer</th>
                <th>Markup</th>
                <th>Date</th>
                <th>Saleprice</th>
              </tr>
            </thead>
            <tbody>
            {
              this.props.sales.filter(sale => {
                return sale.seller === this.state.value;
              }).map((sale, index) => (
                <tr key={index}>
                  <td>{sale.seller}</td>
                  <td>{sale.car}</td>
                  <td>{sale.buyer}</td>
                  <td>{sale.markup}</td>
                  <td>{sale.date}</td>
                  <td>£{sale.salePrice}</td>
                </tr>
              ))
            }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

// TODO:
// Display sales information based on the state of the seller
  // filter the array of sales based on the name of the seller (found in state)
  // map through all the filtered sales
export default DisplaySales;