import React, { useContext, useState } from "react";
import axios from "axios";
import { RestaurantsContext } from "../context/RestaurantsContext";

const AddRestaurant = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");
  const { addRestaurants } = useContext(RestaurantsContext);

  const addRestaurant = async () => {
    const { data } = await axios.post(`/api/restaurants`, {
      name,
      location,
      price: priceRange,
    });
    addRestaurants(data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addRestaurant();
    setName("");
    setLocation("");
    setPriceRange("Price Range");
  };
  return (
    <div className="mb-4">
      <form action="" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              value={name}
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              placeholder="name"
            />
          </div>
          <div className="col">
            <input
              type="text"
              value={location}
              className="form-control"
              onChange={(e) => setLocation(e.target.value)}
              placeholder="location"
            />
          </div>
          <div className="col">
            <select
              className="custom-select my-1 mr-sm-2"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
