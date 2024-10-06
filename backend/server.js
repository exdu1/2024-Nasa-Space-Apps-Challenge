import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
import axios from "axios";
import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;
const username = process.env.METEOMATICS_USERNAME; // Your Meteomatics username
const password = process.env.METEOMATICS_API_KEY;  // Your Meteomatics API key
app.use(cors());

const weatherUrl =`https://${username}:${password}@api.meteomatics.com/2024-10-05T23:50:00.000-04:00--2024-10-06T23:50:00.000-04:00:PT12H/t_2m:C,pressure_100m:Pa,wind_speed_FL10:mph,relative_humidity_2m:p,uv:idx,total_precipitation_accumulation_1d_efi:idx,visibility:m/43.6534817,-79.3839347/json?model=mix`

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


// axios.get(weatherUrl)
//     .then(response => {
//         const weatherData = response.data;
//         if (!weatherData || !weatherData.data) {
//             return console.error("No data found");
//         }

//         // Loop through the data array (each weather parameter)
//         weatherData.data.forEach(parameterEntry => {
//             console.log(`Parameter: ${parameterEntry.parameter}`);

//             // Accessing the coordinates array for the parameter
//             parameterEntry.coordinates.forEach(coordinate => {
//                 console.log(`Lat: ${coordinate.lat}, Lon: ${coordinate.lon}`);

//                 // Accessing the dates and values for the parameter
//                 coordinate.dates.forEach(dateEntry => {
//                     console.log(`Date: ${dateEntry.date}, Value: ${dateEntry.value}`);
//                 });
//             });
//         });
//     })
//     .catch(error => {
//         console.error('Error fetching data from Meteomatics:', error);
//     });

    app.get('/api/weather', async (req, res) => {
        try {
            // API call to Meteomatics
            const weatherUrl = `https://${username}:${password}@api.meteomatics.com/2024-10-05T23:50:00.000-04:00--2024-10-06T23:50:00.000-04:00:PT12H/t_2m:C,pressure_100m:Pa,wind_speed_FL10:mph,relative_humidity_2m:p,uv:idx,total_precipitation_accumulation_1d_efi:idx,visibility:m/43.6534817,-79.3839347/json?model=mix`;
    
            const response = await axios.get(weatherUrl);
            const weatherData = response.data;
    
            // Extract and format the necessary data for the frontend
            if (weatherData && weatherData.data) {
                const formattedData = {
                    "t_2m:C": weatherData.data[0].coordinates[0].dates[0].value,
                    "relative_humidity_2m:p": weatherData.data[1].coordinates[0].dates[0].value,
                    "wind_speed_FL10:mph": weatherData.data[2].coordinates[0].dates[0].value,
                    "visibility:m": weatherData.data[3].coordinates[0].dates[0].value,
                    "uv:idx": weatherData.data[4].coordinates[0].dates[0].value,
                    "pressure_100m:Pa": weatherData.data[5].coordinates[0].dates[0].value,
                    "total_precipitation_accumulation_1d_efi:idx": weatherData.data[6].coordinates[0].dates[0].value,
                };
    
                // Send the formatted data to the frontend
                //console.log(formattedData);
                res.json(formattedData);
            } else {
                res.status(404).json({ message: "Weather data not found" });
            }
        } catch (error) {
            console.error("Error fetching weather data:", error);
            res.status(500).json({ message: "Failed to fetch weather data" });
        }
    });
