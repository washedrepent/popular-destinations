import "./App.css";
import React, { useState } from "react";
import DestinationsList from "./components/DestinationsList";

export default function App() {
    const destinations = [
        {
            id: 0,
            name: "Paris",
            image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
        },
        {
            id: 1,
            name: "New York",
            image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/NYC_Downtown_Manhattan_Skyline_seen_from_Paulus_Hook_2019-12-20_IMG_7347_FRD_%28cropped%29.jpg",
        },
    ];

    return (
        <div className='App'>
            <DestinationsList destinations={destinations} />
        </div>
    );
}
