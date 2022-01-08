import React from "react";
import "./Destination.css";
import thumbsup from "../thumbsup.png";
import thumbsdown from "../thumbsdown.png";

export default function Destination(props) {
    const handleLikes = () => {
        const newLikes = [...props.likes];
        newLikes[props.id] += 1;
        props.setLikes(newLikes);
    };

    const handleDislikes = () => {
        const newDislikes = [...props.dislikes];
        newDislikes[props.id] += 1;
        props.setDislikes(newDislikes);
    };
    return (
        <div className='destination'>
            <h3 className='destination-name'>{props.name}</h3>
            <img
                className='destination-image'
                src={props.image}
                alt={props.name}
            />
            <div className='destination-info'>
                <div className='likes-box'>
                    <span className='likes-icons'>
                        <img
                            className='icon-like'
                            src={thumbsup}
                            alt='thumbs up'
                            onClick={handleLikes}
                        />
                        <img
                            className='icon-dislike'
                            src={thumbsdown}
                            alt='thumbs down'
                            onClick={handleDislikes}
                        />
                    </span>
                    <div className='likes-counts'>
                        <p className='likes-count'>
                            Likes: {props.likes[props.id]}
                        </p>
                        <p className='dislikes-count'>
                            Dislikes: {props.dislikes[props.id]}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
