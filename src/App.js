<<<<<<< HEAD
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
=======
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
>>>>>>> d75966adb0d611d95d2ee5daca2ff867a8f2c81d

  return (
    <div>
      <Navbar />
<<<<<<< HEAD
      <BikeList bikesList={bikesList} />
=======
      <BikeList
        bikesList={bikesList}
        updatePrice={updatePrice}
        deleteBike={deleteBike}
      />
>>>>>>> d75966adb0d611d95d2ee5daca2ff867a8f2c81d
      <button>Add Bike</button>
    </div>
  );
}

export default App;
