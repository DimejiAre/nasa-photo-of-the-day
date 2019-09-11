import React from "react";

function Footer(props){
    const {copyright, date} = props;
    return (
        <footer>
            <p>Published: {date}</p>
            <p>Image Credits & CopyRight: {copyright}</p>
        </footer>
    )
}

export default Footer;