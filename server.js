const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const cors = require('cors');
app.use(cors({
  origin: 'http://local host:3000',
  credentials: true,
}));
// Define API routes here
const mongoose = require("mongoose");
const mongo = process.env.PROD_MONGODB || "mongodb://localhost:27017/googlebooks"
mongoose.connect(mongo, {useNewUrlParser: true})
.then(() => {
  console.log("🗄 ==> Successfully connected to mongoDB.");
})
.catch((err) => {
  console.log(`Error connecting to mongoDB: ${err}`);
});
require("./routes/routes")(app);
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});