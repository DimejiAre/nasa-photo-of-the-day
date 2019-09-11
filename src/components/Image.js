import React from "react";

function Image(props){
    const {title, imageUrl, explanation} = props;
    return (
        <div className='main-content'>
            <h1>{title}</h1>
            <img src={imageUrl} alt='Photo of the day'/>
            <p>{explanation}</p>
        </div>
    )
}

export default Image;