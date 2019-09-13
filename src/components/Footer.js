import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
    background-color: cornflowerblue;
    padding: 10px 0;
`;

function Footer(props){
    const {copyright, date} = props;
    return (
        <StyledFooter>
            <p>Published: {date}</p>
            <p>Image Credits & CopyRight: {copyright}</p>
        </StyledFooter>
    )
}

export default Footer;