import React, { Component } from "react";
import { connect } from "react-redux";

export class Location extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.city}</h1>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { city: state.temperature.city };
}

export default connect(mapStateToProps, null)(Location);
