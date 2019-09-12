import React from "react";
import styled from "styled-components"

const StyledHeader = styled.header`
    background-color: cornflowerblue;
    padding: 10px 0;
    h1 {
        font-size: 4rem;
        margin: 0;
    }
`;

function Header(){
    return (
        <StyledHeader>
            <h1>NASA PHOTO OF THE DAY</h1>
        </StyledHeader>
    )
}

export default Header;