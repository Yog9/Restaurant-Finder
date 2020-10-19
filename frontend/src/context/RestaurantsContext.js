import React, { useState, createContext } from "react";

export const RestaurantsContext = createContext();
const RestaurantsContextProvider = (props) => {
  const [restaurants, setRestaurant] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [avergeRating, setAvergeRating] = useState([]);

  const addRestaurants = (restaurant) => {
    setRestaurant([...restaurants, restaurant]);
  };
  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        setRestaurant,
        addRestaurants,
        selectedRestaurant,
        setSelectedRestaurant,
        avergeRating,
        setAvergeRating,
      }}
    >
      {props.children}
    </RestaurantsContext.Provider>
  );
};
export default RestaurantsContextProvider;
