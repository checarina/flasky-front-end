import PropTypes from "prop-types";

import Bike from "./Bike";

function BikeList(props) {
  const bikeComponents = [];
  const bikesList = props.bikesList;
<<<<<<< HEAD
=======
  const updatePrice = props.updatePrice;
  const deleteBike = props.deleteBike;
>>>>>>> d75966adb0d611d95d2ee5daca2ff867a8f2c81d

  for (const bike of bikesList) {
    bikeComponents.push(
      <Bike
        key={bike.id}
        id={bike.id}
        name={bike.name}
        size={bike.size}
        price={bike.price}
        type={bike.type}
<<<<<<< HEAD
=======
        updatePrice={updatePrice}
        deleteBike={deleteBike}
>>>>>>> d75966adb0d611d95d2ee5daca2ff867a8f2c81d
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
<<<<<<< HEAD
=======
  updatePrice: PropTypes.func.isRequired,
  deleteBike: PropTypes.func.isRequired,
>>>>>>> d75966adb0d611d95d2ee5daca2ff867a8f2c81d
};

export default BikeList;
