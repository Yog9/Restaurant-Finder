import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { RestaurantsContext } from "../context/RestaurantsContext";

const AddReview = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } = useContext(
    RestaurantsContext
  );
  const { avergeRating, setAvergeRating } = useContext(RestaurantsContext);

  const [name, setName] = useState("");
  const [rating, setRating] = useState("Rating");
  const [review, setReview] = useState("");
  const addReview = async () => {
    const { data } = await axios.post(`/api/restaurants/${id}/addReview`, {
      name,
      description: review,
      rating,
      restaurantId: id,
    });
  };
  const fetchRestaurantDetail = async () => {
    const { data } = await axios.get(`/api/restaurants/${id}`);
    setSelectedRestaurant(data);
    setAvergeRating(data.avgRating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview();
    fetchRestaurantDetail();
    setName("");
    setRating("Rating");
    setReview("");
  };
  return (
    <div className="mb-2">
      <form action="">
        <div className="form-row">
          <div className="form-group col-8">
            <label htmlFor="name">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group col-4">
            <label htmlFor="rating">Rating</label>
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              id="rating"
              className="custom-select"
            >
              <option disabled>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="Review">Review</label>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            id="Review"
            className="form-control"
            placeholder="review"
          ></textarea>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddReview;
