import React from "react";
import styled from "styled-components";

const StyledImage = styled.div`
    p {
        padding: 0 40px;
        margin: 5px 0;
    }
    img {
        max-height: 700px;
    }
`;

function Image(props){
    const {title, imageUrl, explanation} = props;
    return (
        <StyledImage className='main-content'>
            <h2>{title}</h2>
            <div><img src={imageUrl} alt='Photo of the day'/></div>
            <p>{explanation}</p>
        </StyledImage>
    )
}

export default Image;