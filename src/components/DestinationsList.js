import React, { useState, useEffect } from "react";
import Destination from "./Destination";

import "./DestinationsList.css";

export default function DestinationsList(props) {
    const [likes, setLikes] = useState([0, 0]);
    const [dislikes, setDislikes] = useState([0, 0]);
    const [mostPopular, setMostPopular] = useState("");

    const destinations = props.destinations;

    useEffect(() => {
        if (likes[0] > likes[1]) {
            setMostPopular(destinations[0].name);
        }

        if (likes[1] > likes[0]) {
            setMostPopular(destinations[1].name);
        }

        if (likes[0] === likes[1]) {
            setMostPopular("Tied - Both are equally popular");
        }
    }, [likes, destinations]);

    return (
        <div className='destinations'>
            <header>
                <h1>Popular Destinations</h1>
            </header>
            <div className='destinations-list'>
                <Destination
                    id={destinations[0].id}
                    name={destinations[0].name}
                    image={destinations[0].image}
                    likes={likes}
                    dislikes={dislikes}
                    setLikes={setLikes}
                    setDislikes={setDislikes}
                />
                <div className='mid-section'>
                    <h2>Most Popular Destination</h2>
                    <h3>{mostPopular}</h3>
                </div>
                <Destination
                    id={destinations[1].id}
                    name={destinations[1].name}
                    image={destinations[1].image}
                    likes={likes}
                    dislikes={dislikes}
                    setLikes={setLikes}
                    setDislikes={setDislikes}
                />
            </div>
        </div>
    );
}
