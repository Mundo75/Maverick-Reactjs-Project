import React, { Component } from 'react';
import "./search.css";
import { Redirect } from 'react-router-dom'
import API from "../../utils/API";
// import SearchBtn from "../Search/SearchBtn";


class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            icaoCode: "",
            iataCode: "",
            flightNumber: "",
            redirectToReferrer: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

   

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });

        if (this.state.icaoCode === "AAL") {
            this.setState({ iataCode: "AA" })
        } else if (this.state.icaoCode === "BAW") {
            this.setState({ iataCode: "BA" })
        } else if (this.state.icaoCode === "CPA") {
            this.setState({ iataCode: "CX" })
        } else if (this.state.icaoCode === "ETD") {
            this.setState({ iataCode: "EY" })
        } else if (this.state.icaoCode === "HAL") {
            this.setState({ iataCode: "HA" })
        } else if (this.state.icaoCode === "QFA") {
            this.setState({ iataCode: "QF" })
        } else if (this.state.icaoCode === "QTR") {
            this.setState({ iataCode: "QR" })
        } else if (this.state.icaoCode === "UAL") {
            this.setState({ iataCode: "UA" })
        } else if (this.state.icaoCode === "VIR") {
            this.setState({ iataCode: "VS" })
        } else if (this.state.icaoCode === "VOZ") {
            this.setState({ iataCode: "VA" })
        };

        console.log(event.target.value);

    }

    // handleSubmit(event) {
    //     alert("icao: " + this.state.icaoCode + " | IATA: " + this.state.iataCode + " | Flight Number: " + this.state.flightNumber);
    //     event.preventDefault();
    // }

    handleSubmit = event => {
        let flightInfo = {
            icaoCode: this.state.icaoCode,
            iataCode: this.state.iataCode,
            flightNumber: this.state.flightNumber
        }
        event.preventDefault();
        if (this.state.icaoCode && this.state.iataCode && this.state.flightNumber) {
            API.getKitInfo(flightInfo.icaoCode)   
                .then(
                    this.setState({ redirectToReferrer: true })
                )
                .catch(err => console.log(err));
        }
        let url = "https://flightaware.com/live/flight/" + flightInfo.icaoCode + flightInfo.flightNumber;
        window.open(url,'_blank','height=600,width=600');    
    };

    render() {
        
        const redirectToReferrer = this.state.redirectToReferrer;
        if (redirectToReferrer === true) {
            return <Redirect
                to={{
                    pathname: "/results",
                    state: {
                        icaoCode: this.state.icaoCode,
                        iataCode: this.state.iataCode,
                        flightNumber: this.state.flightNumber
                    }
                }}
            />
        }

        return (
            <div className="container">

                <div id="user-input">

                    <form onSubmit={this.handleSubmit}>
                        <h4>Search for a flight</h4>
                        <div className="form-group">
                            <label htmlFor="selectAirline">Select Airline</label>
                            <select className="form-control" id="select-airline" name="icaoCode" value={this.state.value} onChange={this.handleChange}>
                                <option value="" defaultValue>----------------</option>
                                <option value="AAL">American Airlines - AA</option>
                                <option value="BAW">British Airways - BA</option>
                                <option value="CPA">Cathay Pacific - CX</option>
                                <option value="ETD">Etihad Airways - EY</option>
                                <option value="HAL">Hawaiian Airlines - HA</option>
                                <option value="QFA">Qantas - QF</option>
                                <option value="QTR">Qatar Airways - QR</option>
                                <option value="UAL">United Airlines - UA</option>
                                <option value="VIR">Virgin Atlantic Airways - VS</option>
                                <option value="VOZ">Virgin Australia - VA</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="flightNumber">Flight Number</label>
                            <input type="text" className="form-control" id="flight-number" placeholder="----------------" name="flightNumber" onChange={this.handleChange} />
                        </div>

                        {/* <a className="btn btn-secondary" href="/results" role="button" type="submit">Submit</a> */}
                        {/* <a href="/results"> */}
                        <button className="btn btn-secondary" type="submit">Submit</button>
                        {/* </a> */}

                    </form>
                    
                </div>
                <div>
               
                    </div>
            </div>
        );

    }

}

export default Search;