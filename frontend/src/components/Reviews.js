import React from "react";
import StarRating from "./StarRating";

const Reviews = ({ reviews }) => {
  const reviewDetail = reviews.map((review) => {
    return (
      <div
        key={review._id}
        className="card text-white bg-primary mb-3 mr-4"
        style={{ maxWidth: "30%" }}
      >
        <div className="card-header d-flex justify-content-between">
          <span>{review.name}</span>
          <span>
            <StarRating rating={review.rating} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">{review.description}</p>
        </div>
      </div>
    );
  });
  return <div className="row row-cols-3 mb-2">{reviewDetail}</div>;
};

export default Reviews;
