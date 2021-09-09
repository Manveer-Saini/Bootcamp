const express = require("express");
const cors = require('cors');
const app = express();
const port = 8000;
// Import database to server
require("./config/mongoose.config");

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}));

// Import the routes for the server to use
// const AllMyProductRoutes = 
require("./routes/manager.routes")(app);
// AllMyProductRoutes(app);

app.listen(port, () => console.log(`The server is all fired up on port ${port}`));
