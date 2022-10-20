import React from "react";

function Card(props) {
  return (
    <div className="main--container">
      <div className="location-container">
        <h2>{props.location}</h2>
        <p>{props.googleMapsUrl}</p>
        <h1>{props.title}</h1>
        <p>{props.startDate}</p>
        <p>{props.description}</p>
        {/* <p>{props.imageUrl}</p> */}
      </div>
      <div></div>
    </div>
  );
}

export default Card;
