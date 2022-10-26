const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require(`./routes`);

app.use(cors());
app.use(bodyParser.json());
app.use("/football", routes);

const server = app.listen(4494, () => console.log(`Server succesfully started on Port: ${server.address().port}`));

module.exports = server;