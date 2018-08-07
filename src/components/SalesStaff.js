import React from 'react';

const SalesStaff = (props) => {
  return (
    <div className="">
      <h2>Sales Team Information</h2>
      <form onSubmit={props.handleFormSubmit}>
        <label>
          First Name:
          <input type="text" name="sellerFirstName" value={props.firstName} onChange={props.handleInputChange} />
        </label>
        <br/>
        <label>
          Last Name:
          <input type="text" name="sellerLastName" value={props.lastName} onChange={props.handleInputChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <ul>
        {props.salesPeople.map((salesperson, index) => (
          <li key={index}>{salesperson.name} {salesperson.lastName}</li>
        ))}
      </ul>
    </div>
  );
}

export default SalesStaff;