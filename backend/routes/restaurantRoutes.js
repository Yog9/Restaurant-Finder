import express from "express";
import {
  createRestaurant,
  deleteRestaurant,
  getAllRestaurants,
  updateRestaurant,
  getRestaurant,
  createReview,
} from "../controllers/restaurantController.js";

const router = express.Router();

// @desc Fetch all restaurants
// @route GET /api/restaurants
// @access Public
router.get("/", getAllRestaurants);

// @desc Fetch Details of single restaurant
// @route GET /api/restaurants/:id
// @access Public
router.get("/:id", getRestaurant);

// @desc Update a single restaurant
// @route PUT /api/restaurants/:id
// @access Public
router.put("/:id", updateRestaurant);

// @desc Delete a single restaurant
// @route DELETE /api/restaurants/:id
// @access Public
router.delete("/:id", deleteRestaurant);

// @desc Create a single restaurant
// @route POST /api/restaurants
// @access Public
router.post("/", createRestaurant);


// @desc Create review of single restaurant
// @route POST /api/restaurants/:id/addReview
// @access Public
router.post("/:id/addReview", createReview);

export default router;
