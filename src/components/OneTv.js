import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
// import axios from "axios";
import { connect } from "react-redux";
import { fetchGets } from "../actions/getActions";

import "../App.css";
import loadig from "../img/loading.gif";

class OneTv extends Component {
    /* constructor(props) {
        super(props);
        this.state = { data: { status: false, response: [] } };
    }

    componentDidMount() {
        console.log("DidMount");
        // fetch("http://ppc.onetvrn.com:3000/query/tsn/D6A020F8FE4366A")
        //     .then(response => {
        //         return response.json();
        //     })
        //     .then(response => {
        //         this.setState({ data: { status: true, response: response } });
        //     });
        axios
            .get("http://ppc.onetvrn.com:3000/query/tsn/D6A020F8FE4366A")
            .then(response => {
                console.log(response);
                this.setState({
                    data: { status: true, response: response.data }
                });
            })
            .catch(e => {
                console.log("Error!!");
                console.log(e);
            });
    } */

    componentDidMount() {
        console.log("DidMount");
        this.props.dispatch(fetchGets());
    }

    render() {
        console.log("OneTV");
        console.log(this.props.response);
        // console.log(Object.keys(this.state.data));
        //if (this.state.data.status) {
        if (this.props.response.isFetching) {
            const {
                TIVO: {
                    deviceInfoSearchResponse: { requestId: dato }
                }
            } = this.props.response.gets.data;
            return (
                <div className="One-tv">
                    <h1>OneTv</h1>
                    {/* <p>{this.state.data.response.status}</p> */}
                    <p>{this.props.response.gets.status}</p>
                    <Grid container spacing={3}>
                        <Grid item xs={6} sm={3}>
                            <Card>
                                <h5>TIVO</h5>
                                {/* <p>
                                    {
                                        this.state.data.response.data.TIVO
                                            .deviceInfoSearchResponse.requestId
                                    }
                                </p> 
                                <p>
                                    {
                                        this.props.response.gets.data.TIVO
                                            .deviceInfoSearchResponse.requestId
                                    }
                                </p> */}
                                <p>{dato}</p>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Card>
                                <h5>LDAP</h5>
                                {/*  <p>
                                    {
                                        this.state.data.response.data.LDAP
                                            .orderCompletedEvent.orderKey
                                            .message
                                    }
                                </p> */}
                                <p>
                                    {
                                        this.props.response.gets.data.LDAP
                                            .orderCompletedEvent.orderKey
                                            .message
                                    }
                                </p>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Card>
                                <h5>CUBIWARE</h5>
                                {/* <p>{this.state.data.response.data.CUBIWARE}</p> */}
                                <p>{this.props.response.gets.data.CUBIWARE}</p>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Card>
                                <h5>LINPUB</h5>
                                <p>
                                    {
                                        //data.LINPUB.accountEntitlementList.accountEntitlement.partnerCustomerId
                                        //this.state.data.response.data.LINPUB.error.code
                                    }
                                </p>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            );
        } else {
            return (
                <div className="One-tv">
                    <h1>OneTv</h1>
                    <img src={loadig} alt="Loading" className="One-tv-image"></img>
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    return { response: state.gets };
}

export default connect(mapStateToProps, null)(OneTv);
