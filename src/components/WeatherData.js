import React, { Component } from "react";
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTemperature from "./WeatherTemperature";

class WeatherData extends Component {
    render() {
        return (
            <div>
                WeatherData
                <WeatherTemperature />
                <WeatherExtraInfo />
            </div>
        );
    }
}

export default WeatherData;
