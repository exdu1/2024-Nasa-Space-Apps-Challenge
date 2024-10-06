import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
import axios from "axios";
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;
const username = process.env.METEOMATICS_USERNAME; // Your Meteomatics username
const password = process.env.METEOMATICS_API_KEY;  // Your Meteomatics API key


const weatherUrl =`https://${username}:${password}@api.meteomatics.com/2024-10-05T23:50:00.000-04:00--2024-10-06T23:50:00.000-04:00:PT12H/t_2m:C,pressure_100m:Pa,wind_speed_FL10:mph,relative_humidity_2m:p,uv:idx,total_precipitation_accumulation_1d_efi:idx,visibility:m/43.6534817,-79.3839347/json?model=mix`

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

axios.get(weatherUrl)
    .then(response => {
        const weatherData = response.data;
        if (!weatherData || !weatherData.data) {
            return console.error("No data found");
        }

        // Loop through the data array (each weather parameter)
        weatherData.data.forEach(parameterEntry => {
            console.log(`Parameter: ${parameterEntry.parameter}`);

            // Accessing the coordinates array for the parameter
            parameterEntry.coordinates.forEach(coordinate => {
                console.log(`Lat: ${coordinate.lat}, Lon: ${coordinate.lon}`);

                // Accessing the dates and values for the parameter
                coordinate.dates.forEach(dateEntry => {
                    console.log(`Date: ${dateEntry.date}, Value: ${dateEntry.value}`);
                });
            });
        });
    })
    .catch(error => {
        console.error('Error fetching data from Meteomatics:', error);
    });

//nasa surface temp
//nasa eco stress 
