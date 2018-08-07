import React from 'react';

const CarDetails = (props) => {
  return (
    <div className="">
      <h2>Car Details</h2>
      <form onSubmit={props.handleFormSubmit}>
        <label>
          Name:
          <input type="text" name="carName" value={props.carName} onChange={props.handleInputChange} />
        </label>
        <br />
        <label>
          Colour:
          <input type="text" name="carColor" value={props.carColour} onChange={props.handleInputChange} />
        </label>
        <br />
        <label>
          Purchase Value:
          <input type="text" name="carPurchaseValue" value={props.carPurchaseValue} onChange={props.handleInputChange} />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
      <ul>
        {props.carInformation.map((car, index) => (
          <li key={index}>
            {car.name}
            <ul>
              <li>Colour: {car.color}</li>
              <li>Purchase Value: {car.purchaseValue}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarDetails;