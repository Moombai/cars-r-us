import React from 'react';

const SalesStaff = (props) => {
  return (
    <div className="">
      <form onSubmit={props.handleFormSubmit}>
        <label>
          Add:
          <input type="text" value={props.salesInput} onChange={props.handleInputChange} />
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