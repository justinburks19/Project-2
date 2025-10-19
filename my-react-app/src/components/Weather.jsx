import React, { useEffect} from "react";
import {useApi } from "../Context/ApiContext.jsx";
import { clamp } from "three/src/math/MathUtils.js";
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
        //get the first 24 hours of data
        const rows = {
            time: row.time.slice(0, 24),
            temperature_2m: row.temperature_2m.slice(0, 24),
        };
        const currentTime = new Date().toISOString().slice(5, 13); // Get current time in 'YYYY-MM-DDTHH' format
    return (
       <Enter currentTime={currentTime} rows={rows} />
    );
};

    function Enter({currentTime, rows}) {
      return (<div className="row m-auto d-flex justify-content-center">
            <p className="d-flex flex-wrap justify-content-center" style={{
    fontSize: 'clamp(1rem, 2vw, 2rem)'
  }}>{currentTime}</p>
            <h1 className="d-flex flex-wrap justify-content-center" style={{
    fontSize: 'clamp(1rem, 3vw, 4rem)'
  }}>Weather Data Via Api</h1>
            {rows.temperature_2m.map((temp, index) => <div key={index} style={{
    marginBottom: '10px',
    borderBottom: '1px solid gray',
    border: '1px solid white'
  }} className="col-4 m-1">
                    <p style={{
      fontSize: 'clamp(1rem, 2vw, 2rem)'
    }}>Temperature: {temp}°C</p>
                    <p style={{
      fontSize: 'clamp(1rem, 2vw, 2rem)'
    }}> Time: {rows.time[index].slice(11, 16)}</p>
                </div>)}
        </div>);
    }
  