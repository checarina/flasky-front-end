import "./Bike.css";

function Bike(props) {
  const myBike = {
    id: 1,
    name: "My bike to be rendered",
    size: 50,
    price: 100,
    type: "special",
  };

  return (
    <div>
      <h2 className="bike__name">{props.name}</h2>
      <ul>
        <li>{props.id}</li>
        <li>{props.size}</li>
        <li>{props.price}</li>
        <li>{props.type}</li>
      </ul>
    </div>
  );
}

export default Bike;
