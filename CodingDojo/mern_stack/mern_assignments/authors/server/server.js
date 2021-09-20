const express = require("express");
const cors = require('cors');
const app = express();
const port = 8000;
// Import database to server
require("./config/mongoose.config");

// app.use(cors());
// app.use(express.json())
// app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
	origin: "http://localhost:3000"
}))

// Import the routes for the server to use
require("./routes/author.routes")(app);


app.listen(port, () => console.log(`The server is all fired up on port ${port}`));
