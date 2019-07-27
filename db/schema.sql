
DROP DATABASE IF EXISTS test_db; 

CREATE DATABASE test_db;

USE test_db;

CREATE TABLE flightKit (

		id INT(10) AUTO_INCREMENT NOT NULL,
        airline_name VARCHAR(200) NOT NULL,
        iata_code VARCHAR(200) NOT NULL,
        icao_code VARCHAR(100)  NOT NULL,
        therapeutic_category VARCHAR(200),
        generic_name VARCHAR(200),
        size_strength VARCHAR(200),
        form_type VARCHAR(200), 
        unit VARCHAR(100),
        qty VARCHAR(100),
        location VARCHAR(200),
            
        PRIMARY KEY (id)

);

CREATE TABLE opsProcedures (

		id INT(10) AUTO_INCREMENT NOT NULL,
        airline_name VARCHAR(60) NOT NULL,
        iata_code VARCHAR(45) NOT NULL,
        icao_code VARCHAR(45)  NOT NULL,
        call_sign VARCHAR(60),
        headquarters VARCHAR(80),
        soc_contact1 VARCHAR(50),
		soc_contact2 VARCHAR(50),
		soc_contact3 VARCHAR(50),
        ems_noc TINYINT(1),
        dx_noc TINYINT(1),
		case_summary TINYINT(1),
        vhf TINYINT(1),
        hf TINYINT(1),
        satcom TINYINT(1),
        acars VARCHAR(20),
        tele_med TINYINT(1),
        ems VARCHAR(200), 
                  
        PRIMARY KEY (id)

);



SELECT * FROM flightKit;
SELECT * FROM OpsProcedures