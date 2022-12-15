import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import BikeList from "./components/BikeList.js";

const INITIAL_BIKES = [
  {
    id: 1,
    name: "Cool Bike",
    size: 50,
    price: 100,
    type: "special",
  },
  {
    id: 2,
    name: "BikeMatic 3000",
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

function App() {
  const initialCopy = INITIAL_BIKES.map((bike) => {
    return { ...bike };
  });

  const [bikesList, setBikesList] = useState(initialCopy);

  const updatePrice = (bikeId, updatedPrice) => {
    console.log("updatePrice called");
    const newBikesList = [];
    for (const bike of bikesList) {
      if (bike.id !== bikeId) {
        newBikesList.push(bike);
      } else {
        const newBike = {
          ...bike,
          price: updatedPrice,
        };
        newBikesList.push(newBike);
      }
    }
    setBikesList(newBikesList);
  };

  const deleteBike = (bikeId) => {
    console.log("deleteBike Called");
    const newBikesList = [];
    for (const bike of bikesList) {
      if (bike.id !== bikeId) {
        newBikesList.push(bike);
      }
    }
    setBikesList(newBikesList);
  };

  return (
    <div>
      <Navbar />
      <BikeList
        bikesList={bikesList}
        updatePrice={updatePrice}
        deleteBike={deleteBike}
      />
      <button>Add Bike</button>
    </div>
  );
}

export default App;
