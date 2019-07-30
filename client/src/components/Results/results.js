import React, { Component } from 'react';
import "./results.css";
require("dotenv").config();
const apiKey = process.env.API_KEY;
const axios = require("axios");



class Results extends Component {

    constructor(props) {
        super(props);

        this.state = {
            icaoCode: this.props.location.state.icaoCode,
            iataCode: this.props.location.state.iataCode,
            flightNumber: this.props.location.state.flightNumber,
            opsList: [],


        };

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        // let departure;
        // let arrival;
        let iataCode = this.props.location.state.iataCode;
        let flightNumber = this.props.location.state.flightNumber;
        let flightParameters = {
            iataCode: this.props.location.state.iataCode,
            flightNumber: this.props.location.state.flightNumber
        };
        console.log(flightParameters);
        console.log(apiKey);

        let flight = iataCode + flightNumber;

        axios.get("http://aviation-edge.com/v2/public/flights?key=" + apiKey + "&flightIata=" + flight).then(function (response) {

            console.log(response.data);

            this.setState({
                departure: response.data[0].departure.iataCode,
                arrival: response.data[0].arrival.iataCode

            })
            // departure = response.data[0].departure.iataCode;
            // arrival = response.data[0].arrival.iataCode;

        }).catch(e => {
            console.log(e);
        });
    }

    render() {
        // let departure;
        // let arrival;
        // let iataCode = this.props.location.state.iataCode;
        // let flightNumber = this.props.location.state.flightNumber;

        // let flightParameters = {
        //     iataCode: this.props.location.state.iataCode,
        //     flightNumber: this.props.location.state.flightNumber
        // };
        // console.log(flightParameters);
        // console.log(apiTest);

        // let flight = iataCode + flightNumber;

        // axios.get("http://aviation-edge.com/v2/public/flights?key=" + apiTest + "&flightIata=" + flight).then(function (response) {

        //     console.log(response.data);

        //     this.setState({
        //         departure: response.data[0].departure.iataCode,
        //         arrival: response.data[0].arrival.iataCode

        //     })
        //     departure = response.data[0].departure.iataCode;
        //     arrival = response.data[0].arrival.iataCode;


        // }).catch(e => {
        //     console.log(e);
        // });


        return (
            <div className="App">

                <div className="container">

                    <div className="row">

                        <div className="col" id="flightInfo">
                            Flight Information
                        <p>Departure: </p>
                            <p>Arrival: </p>
                        </div>

                        <div className="col" id="kit">
                            Medical Kit Contents
                </div>

                        <div className="col" id="ops">
                            Procedures
                </div>

                    </div>
                    <a href="/search">← Back to search</a>
                </div>
            </div>
        );

    }

    // componentDidMount() {
    //     let iataCode = this.props.location.state.iataCode;
    //     let flightNumber = this.props.location.state.flightNumber;

    //     let flightParameters = {
    //         iataCode: this.props.location.state.iataCode,
    //         flightNumber: this.props.location.state.flightNumber
    //     };
    //     console.log(flightParameters);
    //     console.log(apiTest);

    //     let flight = iataCode + flightNumber;

    //     axios.get("http://aviation-edge.com/v2/public/flights?key=" + apiTest + "&flightIata=" + flight).then(function (response) {

    //         console.log(response.data);

    //         this.setState({
    //             departure: response.data[0].departure.iataCode,
    //             arrival: response.data[0].arrival.iataCode

    //         })

    //     }).catch(e => {
    //         console.log(e);
    //     });
    // }

}

export default Results;