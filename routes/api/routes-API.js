const searchFlights = require("../../components/avAPI.js");
const connection = require("../../config/connection");
const router = require("express").Router();



    router.route("/parameters") 
        .get(function(req, res) {
        return res.json(flightParameters)
        });
    
    router.route("/parameters")
        .put(function(req, res) {
            let flightInfo = req.body;
            console.log(flightInfo);

            flightParameters.push(flightInfo);

            res.json(flightInfo);

        });

    router.route("/flights")    
        .post(function(req, res) {
            console.log(req.body);
            searchFlights(req.body, function(result) {
                console.log("API Call", result);
                res.json(result.data);
            });
        }); 

    router.route("/kits")
        .get(function(req, res) {
            let kitQuery = "SELECT * FROM flightKit WHERE icao_code=?";
            connection.query(kitQuery, ["BAW"], function(error, result) {
                if(error) {
                    return res.send(error)

                } else {
                    return res.json({
                        data: result
                    });
                };
            // for(let i = 0; i < result.length; i++) {
            //     console.log("Therapeutic Category: " + result[i].therapeutic_category + " || Medication: " + result[i].generic_name + " || Dose: " + result[i].size_strength + " || Form: " + result[i].form_type + " || Unit: " + result[i].unit + " || Quantity: " + result[i].qty + " || + Location: " + result[i].location);
    
        
        });
    });

    router.route("/ops")
        .get((req, res) => {
            let opsQuery = "SELECT * FROM OpsProcedures";
            connection.query(opsQuery, function(error, result) {
                if(error) {
                    return res.send(error)

                } else {
                    return res.json({
                        data: result
                });
            };
        });
    });        
    

module.exports = router;