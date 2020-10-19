import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import AddReview from "./AddReview";
import Loading from "./Loading";
import Reviews from "./Reviews";
import StarRating from "./StarRating";

const RestaurantDetails = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } = useContext(
    RestaurantsContext
  );
  const { avergeRating, setAvergeRating } = useContext(RestaurantsContext);
  useEffect(() => {
    const fetchRestaurantDetail = async () => {
      const { data } = await axios.get(`/api/restaurants/${id}`);
      setSelectedRestaurant(data);
      setAvergeRating(data.avgRating);
    };
    fetchRestaurantDetail();
  }, []);
  const avg = avergeRating[0] != undefined ? avergeRating[0].avgRating : null;
  return (
    <>
      {selectedRestaurant ? (
        <>
          <h1 className="text-center display-1">
            {selectedRestaurant.restaurant.name}
          </h1>
          <div className="text-center">
            <StarRating rating={avg} />
          </div>
          {selectedRestaurant.reviews.length ? (
            <div className="mt-3">
              <Reviews reviews={selectedRestaurant.reviews} />
            </div>
          ) : (
            <div className="mt-3">
              No Reviews for {selectedRestaurant.restaurant.name}. Please enter
              the first review.
            </div>
          )}
          <AddReview />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default RestaurantDetails;
