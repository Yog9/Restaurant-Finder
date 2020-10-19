import React from "react";
import AddRestaurant from "./AddRestaurant";
import Header from "./Header";
import RestaurantList from "./RestaurantList";

const Home = () => {
  return (
    <div>
      <Header />
      <AddRestaurant />
      <RestaurantList />
    </div>
  );
};

export default Home;
