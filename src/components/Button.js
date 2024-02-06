
import React from "react";

function Button(props) {
    const handleSubmit = () => {
        props.handleSubmitApp();
    };
    
    return (
        <button type = "button" onClick={handleSubmit}>
            Display Giphy's
        </button>
    );
}

export default Button;