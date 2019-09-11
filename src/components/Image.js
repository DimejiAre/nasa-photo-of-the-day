import React from "react";

function Image(props){
    const {title, imageUrl, explanation} = props;
    return (
        <div className='main-content'>
            <h2>{title}</h2>
            <div class="image"><img src={imageUrl} alt='Photo of the day'/></div>
            <p>{explanation}</p>
        </div>
    )
}

export default Image;