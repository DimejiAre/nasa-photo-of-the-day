import React from "react";

function Footer(props){
    const {copyright, date} = props;
    return (
        <footer>
            <p>Image Credits & CopyRight: {copyright}</p>
            <p>Published: {date}</p>
        </footer>
    )
}

export default Footer;