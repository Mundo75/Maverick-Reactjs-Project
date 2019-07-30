require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const cors = require('cors')
require("./config/connection")



const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  };

app.use(routes);


// require("./routes/api/routes-API")(app);


app.listen(PORT, () => console.log("Congratulations!! API Server is now listening on: " + PORT));

module.exports = app;