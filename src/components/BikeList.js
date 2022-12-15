import PropTypes from "prop-types";

import Bike from "./Bike";

function BikeList(props) {
  const bikeComponents = [];
  const bikesList = props.bikesList;
  const updatePrice = props.updatePrice;
  const deleteBike = props.deleteBike;

  for (const bike of bikesList) {
    bikeComponents.push(
      <Bike
        key={bike.id}
        id={bike.id}
        name={bike.name}
        size={bike.size}
        price={bike.price}
        type={bike.type}
        updatePrice={updatePrice}
        deleteBike={deleteBike}
      />
    );
  }

  return (
    <div>{bikeComponents}</div>
    //returns [<Bike/>, <Bike/>]
  );
}

BikeList.propTypes = {
  bikesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      size: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ),
  updatePrice: PropTypes.func.isRequired,
  deleteBike: PropTypes.func.isRequired,
};

export default BikeList;
