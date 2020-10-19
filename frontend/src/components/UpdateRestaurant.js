import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

const UpdateRestaurant = () => {
  const { id } = useParams();
  let history = useHistory();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  useEffect(() => {
    const fetchRestaurant = async () => {
      const { data } = await axios.get(`/api/restaurants/${id}`);
      const { location, price, name } = data.restaurant;
      setLocation(location);
      setName(name);
      setPriceRange(price);
    };
    fetchRestaurant();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { data } = await axios.put(`/api/restaurants/${id}`, {
      name,
      location,
      price: priceRange,
    });
    history.push("/");
  };

  return (
    <div>
      <form onSubmit={handleUpdate}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price Range</label>
          <input
            id="price"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="form-control"
            type="number"
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateRestaurant;
