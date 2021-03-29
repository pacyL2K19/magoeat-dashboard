/* eslint-disable no-unused-vars */
import React from "react";

const Logo = (props) => {
    return (
        <p style = {{ display : "flex", flexDirection : "row" }}>
            <img
                style = {{height : 45, width : 45}}
                alt="Logo"
                src="/static/logo.svg"
                {...props}
            /> <h3 style = {{ color : "white", fontFamily : "sans-serif", alignSelf : "center", marginLeft : 20}}>MagoEat</h3>
        </p>
    );
};

export default Logo;
