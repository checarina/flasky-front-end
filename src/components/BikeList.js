import Bike from "./Bike";

function BikeList(props) {
  return props.bikesList.map(
    (bike) => (
      <li>
        <Bike
          id={bike.id}
          name={bike.name}
          size={bike.size}
          price={bike.price}
          type={bike.type}
        />
      </li>
    )
    //returns [<Bike/>, <Bike/>]
  );
}
export default BikeList;
