import React from 'react';
import loading from "../images/gif/loading-arrow.gif"

export default function Loading() {
    return (
        <div className = "loading">
            <h4>Rooms Data Loading...</h4>
            <img src={loading}/>
        </div>
    )
}
