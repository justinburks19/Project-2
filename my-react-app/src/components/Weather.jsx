import React, { useEffect} from "react";
import {useApi } from "../Context/apiContext.jsx";
export function Weather() {
    const {info, isLoading, error, fetchData} = useApi();

    useEffect(() => {
        const WEATHER_API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=40.563507&longitude=-74.170368&hourly=temperature_2m';
        fetchData(WEATHER_API_URL);
    }, []);
        if (isLoading) return <p>Loading...</p>;
        if (error) return <p>Error: {error}</p>;
        if (!info) return <p>No data available</p>;
        // Display weather information
        //via rows due to mapping array in object info not possible
        const row = info.hourly;
        const currentTime = new Date().toISOString().slice(5, 13); // Get current time in 'YYYY-MM-DDTHH' format
    return (
        <div>
            <p>{currentTime}</p>
            <h1>Weather Data</h1>
            {row.temperature_2m.map((temp, index) => (
                <div key={index}>
                    <p>Temperature: {temp}°C</p>
                    <p>Time: {row.time[index].slice(11, 16)}</p>
                </div>
            ))}
        </div>
    );
};
