import React from "react";
import { Link } from "react-router-dom";

// import Button from "@material-ui/core/Button";

const style = {
    color: "#ffffff",
    backgroundColor: "#3f51b5",
    height: "40px",
    width: "95px",
    borderRadius: "7px",
    margin: "5px",
    lineHeight: "40px"
};
const styleNav = {
    backgroundColor: "#005b4f",
    display: "flex",
    justifyContent: "space-around"
};

const Navegation = () => {
    return (
        <nav style={styleNav}>
            <Link style={style} to="/">
                Home
            </Link>
            <Link style={style} to="/onetv">
                OneTv
            </Link>
            <Link style={style} to="/weather">
                Weather
            </Link>
        </nav>
    );
};

export default Navegation;
