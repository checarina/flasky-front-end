import "./App.css";
import Navbar from "./components/Navbar";
import BikeList from "./components/BikeList.js";

function App() {
  const bikesList = [
    {
      id: 1,
      name: "This is some data that we will work to display next class!",
      size: 50,
      price: 100,
      type: "special",
    },
    {
      id: 2,
      name: "This is some data that we will work to display next class!",
      size: 40,
      price: 20,
      type: "duplicate",
    },
    {
      id: 3,
      name: "My new bike!!",
      size: 80,
      price: 100,
      type: "unique",
    },
  ];

  return (
    <div>
      <Navbar />
      <BikeList bikesList={bikesList} />
      <button>Add Bike</button>
    </div>
  );
}

export default App;
