import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
import axios from "axios";
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;
const username = process.env.METEOMATICS_USERNAME; 
const password = process.env.METEOMATICS_API_KEY;  

const weatherUrl = `https://${username}:${password}@api.meteomatics.com/2024-10-01T19:25:00.000-04:00--2024-10-05T19:25:00.000-04:00:PT1H/t_5cm:C/43.8554425,-79.6392832_43.5796082,-79.1132193:0.1,0.1/json?model=mix`;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

axios.get(weatherUrl)
    .then(response => {
        const weatherData = response.data;
        if (!weatherData || !weatherData.data) {
            return console.error("No data found");
        }

        
        weatherData.data.forEach(entry => {
           
            entry.coordinates.forEach(coordinate => {
                console.log(`Lat: ${coordinate.lat}, Lon: ${coordinate.lon}`);
               
                
                coordinate.dates.forEach(dateEntry => {
                    console.log(`Date: ${dateEntry.date}, Value(Temp in Celsius): ${dateEntry.value}`);
                });
            });
        });
    })
    .catch(error => {
        console.error('Error fetching data from Meteomatics:', error);
    });