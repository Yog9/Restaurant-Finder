import mongoose  from 'mongoose';
import dotenv from 'dotenv';
import restaurants from './data/restaurants.js'
import Restaurant from './models/restaurantModel.js';
import Review from './models/reviewModel.js'
import connectDB from './config/db.js';

dotenv.config()

connectDB()

const importData = async ()=>{
    try{
        await Restaurant.deleteMany()
        await Restaurant.insertMany(restaurants)
        await Review.deleteMany()
        console.log('Data imported')
        process.exit()
    }
    catch(error){
        console.error(`${error}`)
        process.exit(1)
    }
}

const destroyData = async () =>{
    try{
        await Restaurant.deleteMany()
        await Review.deleteMany()
        console.log('Data Destroyed')
        process.exit()
    }
    catch(error){
        console.error(`${error}`)
        process.exit(1)
    }
}

if(process.argv[2] === '-d')
destroyData()
else importData()