import React, { Component } from 'react';
import "./results.css";


class Results extends Component {


    constructor(props) {
        super(props);
        this.state = {
            icaoCode: this.props.location.state.icaoCode,
            iataCode: this.props.location.state.iataCode,
            flightNumber: this.props.location.state.flightNumber,
            opsList: [],
            kitList: [],
            error: null
        }
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


    componentDidMount() {
        let url1 = "http://localhost:3001/api/ops"
        fetch(url1)
            .then(response => response.json())
            .then(this.buildOpsList)
            .catch(error => {
                this.setState({ error });
            })
        
        let url2 = "http://localhost:3001/api/kits"
        fetch(url2)
            .then(response => response.json())
            .then(this.buildKitList)
            .catch(error => {
                this.setState({ error });
            })


    }

    
        
    
    render() {
        return (
            <div className="App">

                <div className="container">

                    <div className="row">

                        <div className="col">
                            Flight Information
                        </div>

                        <div className="col">
                            {this.state.kitList.map((data) => (
                                <ul>
                                    <li key={data.id} id={data.id}>{"AIRLINE: " + data.airline_name}</li>
                                    <li key={data.id} id={data.id}>{"IATA CODE: " + data.iata_code}</li>
                                    <li key={data.id} id={data.id}>{"ICAO CODE: " + data.icao_code}</li>
                                    <li key={data.id} id={data.id}>{"THERAPEUTIC CATEGORY: " + data.therapeutic_category}</li>
                                    <li key={data.id} id={data.id}>{"MEDICATION NAME GENERIC: " + data.generic_name}</li>
                                    <li key={data.id} id={data.id}>{"SIZE / STRENGTH: " + data.size_strength}</li>
                                    <li key={data.id} id={data.id}>{"FORM / TYPE: " + data.form_type}</li>
                                    <li key={data.id} id={data.id}>{"UNIT: " + data.unit}</li>
                                    <li key={data.id} id={data.id}>{"qty: " + data.qty}</li>
                                    <li key={data.id} id={data.id}>{"LOCATION: " + data.location}</li>

                                </ul>
                            ))
                            }
                        </div>

                        <div className="col">


                            {this.state.opsList.map((data) => (
                                <ul>
                                    <li key={data.id} id={data.id}>{"AIRLINE: " + data.airline_name}</li>
                                    <li key={data.id} id={data.id}>{"IATA CODE: " + data.iata_code}</li>
                                    <li key={data.id} id={data.id}>{"ICAO CODE: " + data.icao_code}</li>
                                    <li key={data.id} id={data.id}>{"CALL SIGN: " + data.call_sign}</li>
                                    <li key={data.id} id={data.id}>{"HEADQUARTERS: " + data.headquarters}</li>
                                    <li key={data.id} id={data.id}>{"PRIMARY SOC CONTACT: " + data.soc_contact1}</li>
                                    <li key={data.id} id={data.id}>{"SECONDARY SOC CONTACT: " + data.soc_contact2}</li>
                                    <li key={data.id} id={data.id}>{"BACK-UP SOC CONTACT: " + data.soc_contact3}</li>
                                    <li key={data.id} id={data.id}>{"EMS NOTIFICATION REQUIRED: " + data.ems_noc}</li>
                                    <li key={data.id} id={data.id}>{"CASE SUMMARY REQUIRED: " + data.case_summary}</li>
                                    <li key={data.id} id={data.id}>{"HF RADIO: " + data.hf}</li>
                                    <li key={data.id} id={data.id}>{"SATCOM: " + data.satcom}</li>
                                    <li key={data.id} id={data.id}>{"ACARS: " + data.acars}</li>
                                    <li key={data.id} id={data.id}>{"TEMPUS: " + data.tele_med}</li>
                                    <li key={data.id} id={data.id}>{"SPECIAL EMS PROTOCOL: " + data.ems}</li>
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