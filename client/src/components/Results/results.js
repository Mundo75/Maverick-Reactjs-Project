import React, { Component } from 'react';
import "./results.css";


const apiKey = "93876d-57443b";
// const axios = require("axios");


class Results extends Component {


    constructor(props) {
        super(props);
        this.state = {
            icaoCode: this.props.location.state.icaoCode,
            iataCode: this.props.location.state.iataCode,
            flightNumber: this.props.location.state.flightNumber,
            opsList: [],
            kitList: [],
            infoList: [],
            error: null
        }
        console.log("TEST: " + this.props.location.state.icaoCode)
        // this.componentDidMount = this.componentDidMount.bind(this);
    }

    buildOpsList = (data) => {
        console.log(data);
        this.setState({ opsList: data.data })

    }

    buildKitList = (data) => {
        console.log(data);
        this.setState({ kitList: data.data })

    }

    buildInfoList = (data) => {
        console.log(data);
        this.setState({ infoList: data})
    }


    componentDidMount() {
        let url1 = "/api/ops"
        fetch(url1)
            .then(response => response.json())
            .then(this.buildOpsList)
            .catch(error => {
                this.setState({ error });
            })
        
        let url2 = "/api/kits"
        fetch(url2)
            .then(response => response.json())
            .then(this.buildKitList)
            .catch(error => {
                this.setState({ error });
            })

            fetch("https://aviation-edge.com/v2/public/flights?key=" + apiKey + "&flightIcao=" + this.props.location.state.icaoCode + this.props.location.state.flightNumber)
                .then(response => response.json())
                .then(this.buildInfoList)
                .catch(error => {
                    this.setState({ error })
            })
                
    }



        
    
    render() {
        // let filteredKit = this.state.kitList.filter((data) => {
        //     return data.data.icao_code.indexOF(this.props.location.state.icaoCode) !== -1;
        // });
        return (
            <div className="App">

                <div className="container">

                    <div className="row">
                    <a className="return" href="/search">← Back to search</a>
                        <div className="col">
                        <h3 className="medKit">Flight Details</h3>
                        {this.state.infoList.map((data) => (
                                <ul key={data.id}>
                                    <li className="list-group-item" key="c5" id={data.id}>{"FLIGHT NUMBER: " + data.flight.iataNumber}</li>
                                    <li className="list-group-item" key="c1" id={data.id}>{"TAIL NUMBER: " + data.aircraft.regNumber}</li>
                                    <li className="list-group-item" key="c2" id={data.id}>{"AIRCRAFT TYPE: " + data.aircraft.icaoCode}</li>
                                    <li className="list-group-item" key="c3" id={data.id}>{"DEPARTURE: " + data.departure.icaoCode}</li>
                                    <li className="list-group-item" key="c4" id={data.id}>{"ARRIVAL: " + data.arrival.icaoCode}</li>
                                    <li className="list-group-item" key="c6" id={data.id}>{"LATITUDE: " + data.geography.latitude}</li>
                                    <li className="list-group-item" key="c7" id={data.id}>{"LONGITUDE: " + data.geography.longitude}</li>
                                    <li className="list-group-item" key="c7" id={data.id}>{"ALTITUDE: " + data.geography.altitude}</li>
                                    <li className="list-group-item" key="c7" id={data.id}>{"HEADING: " + data.geography.direction}</li>

                                </ul>
                            ))
                            }
                        </div>

                        <div className="col">
                            <h3 className="kit">Medical Kit Contents</h3>
                            {this.state.kitList.map((data) => (
                                <ul className="kitDiv" key={data.id}>
                                    <li className="list-group-item" key="a1" id={data.id}>{"THERAPEUTIC CATEGORY: " + data.therapeutic_category}</li>
                                    <li className="list-group-item" key="a2" id={data.id}>{"MEDICATION NAME GENERIC: " + data.generic_name}</li>
                                    <li className="list-group-item" key="a3" id={data.id}>{"SIZE / STRENGTH: " + data.size_strength}</li>
                                    <li className="list-group-item" key="a4" id={data.id}>{"FORM / TYPE: " + data.form_type}</li>
                                    <li className="list-group-item" key="a5" id={data.id}>{"UNIT: " + data.unit}</li>
                                    <li className="list-group-item" key="a6" id={data.id}>{"qty: " + data.qty}</li>
                                    <li className="list-group-item" key="a7" id={data.id}>{"LOCATION: " + data.location}</li>

                                </ul>
                            ))
                            }
                        </div>

                        <div className="col">

                            <h3 className="medKit">Ops Procedure</h3>
                            {this.state.opsList.map((data) => (
                                <ul key={data.id}>
                                                                       
                                    <li className="list-group-item" key="b1" id={data.id}>{"CALL SIGN: " + data.call_sign}</li>
                                    <li className="list-group-item" key="b2" id={data.id}>{"HEADQUARTERS: " + data.headquarters}</li>
                                    <li className="list-group-item" key="b3" id={data.id}>{"PRIMARY SOC CONTACT: " + data.soc_contact1}</li>
                                    <li className="list-group-item" key="b4" id={data.id}>{"SECONDARY SOC CONTACT: " + data.soc_contact2}</li>
                                    <li className="list-group-item" key="b5" id={data.id}>{"BACK-UP SOC CONTACT: " + data.soc_contact3}</li>
                                    <li className="list-group-item" key="b6" id={data.id}>{"EMS NOTIFICATION REQUIRED: " + data.ems_noc}</li>
                                    <li className="list-group-item" key="b7" id={data.id}>{"CASE SUMMARY REQUIRED: " + data.case_summary}</li>
                                    <li className="list-group-item" key="b8" id={data.id}>{"HF RADIO: " + data.hf}</li>
                                    <li className="list-group-item" key="b9" id={data.id}>{"SATCOM: " + data.satcom}</li>
                                    <li className="list-group-item" key="b10" id={data.id}>{"ACARS: " + data.acars}</li>
                                    <li className="list-group-item" key="b11" id={data.id}>{"TEMPUS: " + data.tele_med}</li>
                                    <li className="list-group-item" key="b12" id={data.id}>{"SPECIAL EMS PROTOCOL: " + data.ems}</li>
                                </ul>
                            ))
                            }



                            {/* {this.state.error &&
                                <h3>{this.state.error}</h3>} */}
                        </div>

                    </div>
                    <a href="/search">← Back to search</a>
                </div>
            </div>
        );

    }

}

export default Results;