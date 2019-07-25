require("dotenv").config();
const express = require("express");
const routes = require("./routes");
// const apiKey = process.env.API_KEY;
// console.log(apiKey);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("client/build"));
app.use(routes);

// app.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });


require("./routes/api/routes-API")(app);

app.listen(PORT, () => console.log("Congratulations!! API Server is now listening on: " + PORT));

module.exports = app;