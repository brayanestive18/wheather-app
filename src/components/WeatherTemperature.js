/* import React, { Component } from 'react';

class WeatherTemperature extends Component {
    render() {
        return (
            <div>
                27°
            </div>
        );
    }
}

export default WeatherTemperature; */

import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setTemperature } from "../actions/WeatherTemperature";
import { setCity } from '../actions'
 
function WeatherTemperature(props) {
    useEffect(() => {
        document.title = `You temperature ${props.count}°`;
    });

    const handleChange = () => {
        //const newValue = props.count + 2;
        console.log(props)
        props.setTemperature();
    };

    const handleChangeInput = event => {
        //console.log(event.target.value);
        props.setCity(event.target.value);
    };

    return (
        <div>
            <p>You temperature {props.count}° </p>
            <form>
                <label>Set City:</label>
                <input type="text" onChange={handleChangeInput}></input>
            </form>
            <button onClick={handleChange}>Click me</button>
        </div>
    );
}

//export default WeatherTemperature;
WeatherTemperature.propTypes = {
    setTemperature: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    setTemperature: () => dispatch(setTemperature()),
    setCity: value => dispatch(setCity(value))
});

const mapStateToProps = (state) => { 
    return{count: state.temperature.count} };

export default connect(mapStateToProps, mapDispatchToProps)(WeatherTemperature);
