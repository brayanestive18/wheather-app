import React, { Component } from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
import { BrowserRouter, Route } from "react-router-dom";
import OneTv from "./components/OneTv";
import WeatherLocation from "./components/WeatherLocation";
import Home from "./components/Home";
import Navegation from "./components/Navegation";
// import { setCity } from "./actions";

import "./App.css";

/* function App() {
    return (
        <div className="App">
            <header className="App-header">
                <OneTv />
            </header>
            <WeatherLocation />
        </div>
    );
}

export default App;
 */

//const cities = ["Medellín", "Bogota", "Cali"];

class App extends Component {
    /* componentDidMount() {
        store.dispatch(setCity("Calí"));
        this.props.dispatchSetCity("Bogota");
    } */

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    {/* <Route path="/" component={Home} />
                    <Route path="/onetv" component={OneTv} />
                    <Route path="/weather" component={WeatherLocation} /> */}
                    <Navegation/>
                    <Route path="/" exact component={Home} />
                    <Route path="/onetv" component={OneTv} />
                    <Route path="/weather" render={WeatherLocation} />
                </BrowserRouter>
                {/* <header className="App-header">
                    <OneTv />
                </header>
                <WeatherLocation /> */}
            </div>
        );
    }
}

//export default App;
/* App.propTypes = {
    setCity: PropTypes.func.isRequired
}; */

/* const mapDispatchToPropsActions = dispatch => ({
    dispatchSetCity: value => dispatch(setCity(value))
}); */

export default App;

//export default connect(null, mapDispatchToPropsActions)(App);
