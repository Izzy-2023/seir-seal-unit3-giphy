import React from "react";

function Gif(props) {
    return (
        <div className="gif-image">
            <img src ={props.gifSource.image_url} alt="GIF" style={{ height: "200px" }}/>

        </div>
    )
}

export default Gif;