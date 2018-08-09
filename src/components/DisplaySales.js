import React from 'react';

class DisplaySales extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Will' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  calculatePerformance = () => {
    const trackSales = {};
    let topPerformer;
    let worstPerformer;

    this.props.sales.forEach((sale, index) => {
      if (trackSales[sale.seller]  === undefined) {
        trackSales[sale.seller] = sale.markup;
      } else {
        trackSales[sale.seller] += sale.markup;
      }
    });

    let arr = Object.values(trackSales);
    let min = Math.min(...arr);
    let max = Math.max(...arr);

    for (var salesperson in trackSales) {

      if (trackSales[salesperson] === max) {
        topPerformer = salesperson;
      } else if (trackSales[salesperson] === min) {
        worstPerformer = salesperson;
      }
    }

    return {
      top: topPerformer,
      bottom: worstPerformer
    }
  }

  render() {
    // get the top and bottom performer
    const performanceData = this.calculatePerformance();
    return (
      <div>
        <h2>Display Sales Component</h2>
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
          <br/>
          Sorting options:
          <button onClick={this.props.sortPrice}>Purchase Price</button>
          <button onClick={this.props.sortDate}>Date</button>
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
                  <td>£{sale.markup}</td>
                  <td>{sale.date}</td>
                  <td>£{sale.salePrice}</td>
                </tr>
              ))
            }
            </tbody>
          </table>

          <h3>Top Salesperson Info</h3>
          <p>Which salesperson has sold the most by markup</p>
          <p><strong>Most sales:</strong> {performanceData.top}</p>
          <p><strong>Least sales:</strong> {performanceData.bottom}</p>
        </div>
      </div>
    );
  }
}

export default DisplaySales;