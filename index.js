const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

const app = express();

mongoose.connect("mongodb://localhost/emaily-dev");

//app.use sets up middleware

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, //30 days, in miliseconds
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("test index");
});

require("./routes/authRoutes")(app); //idk if i like this, require returns module.exports. in this case a function
require("./routes/billingRoutes")(app);

if (process.env.NODE_ENV == "production") {
  //express serves production assets
  app.use(express.static("client/build"));//see if some local file matches request uri

  //otherwise serve index.html
  const path = require('path');
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  })
  //express serves up index.html file if no route is recognised
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
