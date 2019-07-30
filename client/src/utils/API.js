import axios from "axios";

// const iataCode = dl;
// const flightNumber = 9925;

export default {
  // Gets Flight Information
  getFlightInfo: function(iataCode, flightNumber) {
    return axios.post("/api/parameters" + iataCode + flightNumber);
  },
  // Gets Medical Kit Contents
  getKitInfo: function(param) {
    console.log("TEST: " + param)
    return axios.post("api/kits/", param);

    
  },
 

  // Gets Treatment Procedures
  getOpsInfo: function(id) {
    return axios.get("/api/ops" + id);
  }
};
