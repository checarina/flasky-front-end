import PropTypes from "prop-types";
import { useState } from "react";

import "./Bike.css";

function Bike(props) {
  const bikeName = props.name;
  const bikeId = props.id;
  const bikeSize = props.size;
  const bikeType = props.type;
  const [bikePrice, setBikePrice] = useState(props.price);

  function changeBikePrice(inc) {
    //inc is a boolean flag representing if we are increasing price or decreasing it
    if (inc) {
      setBikePrice(bikePrice + 1);
    } else {
      setBikePrice(bikePrice - 1);
    }
  }

  function getColorFromPrice(price) {
    let myBudget = 100;
    if (price <= myBudget) {
      return "green";
    } else {
      return "red";
    }
  }

  return (
    <div>
      <h2 className="bike__name">{bikeName}</h2>
      <ul>
        <li>ID: {bikeId}</li>
        <li>Size: {bikeSize}</li>
        <li>Type: {bikeType}</li>
        <li>
          Price:{" "}
          <span style={{ color: getColorFromPrice(bikePrice) }}>
            ${bikePrice}
          </span>
        </li>
      </ul>
      <button
        onClick={() => {
          changeBikePrice(true);
        }}
      >
        Increase price
      </button>
      <button
        onClick={() => {
          changeBikePrice(false);
        }}
      >
        Decrease price
      </button>
    </div>
  );
}

Bike.propTypes = {
  id: PropTypes.number.isRequired,
};
export default Bike;
