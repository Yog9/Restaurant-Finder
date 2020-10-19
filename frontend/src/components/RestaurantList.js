import React, { useContext, useEffect } from "react";
import axios from "axios";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useHistory } from "react-router-dom";
import Loading from "./Loading";

const RestaurantList = () => {
  const { restaurants, setRestaurant } = useContext(RestaurantsContext);
  let history = useHistory();
  useEffect(() => {
    const fetchRestaurants = async () => {
      const { data } = await axios.get(`/api/restaurants`);
      setRestaurant(data);
    };
    fetchRestaurants();
  }, [setRestaurant]);

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    const { data } = await axios.delete(`/api/restaurants/${id}`);
    setRestaurant(
      restaurants.filter((restaurant) => {
        return restaurant._id !== id;
      })
    );
  };

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    history.push(`/restaurants/${id}/update`);
  };

  const handleRestaurantSelect = (id) => {
    history.push(`/restaurants/${id}`);
  };

  const restaurantDetails =
    restaurants &&
    restaurants.map((restaurant) => {
      const { name, location, price, _id } = restaurant;
      return (
        <tr key={_id} onClick={() => handleRestaurantSelect(_id)}>
          <td>{name}</td>
          <td>{location}</td>
          <td>{price}</td>
          <td>
            <button
              className="btn btn-warning"
              onClick={(e) => handleUpdate(e, _id)}
            >
              Update
            </button>
          </td>
          <td>
            <button
              className="btn btn-danger"
              onClick={(e) => handleDelete(e, _id)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });

  const list = restaurants.length ? (
    <div className="list-group">
      <table className="table table-hover table-dark">
        <thead>
          <tr className="bg-primary">
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>{restaurantDetails}</tbody>
      </table>
    </div>
  ) : (
    <Loading />
  );
  return list;
};

export default RestaurantList;
