// Gif.js

import React from "react";

function Gif({ gifSource }) {
  console.log("Gif props:", gifSource);

  const imageUrl = gifSource?.data?.images?.original?.url;

  console.log("Image URL:", imageUrl);

  return (
    <div className="gif-image">
      {imageUrl ? (
        <img src={imageUrl} alt="GIF" style={{ height: "200px" }} />
      ) : (
        <p>No GIF to display</p>
      )} 
    </div>
  );
}

export default Gif;


