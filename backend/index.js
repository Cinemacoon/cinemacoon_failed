const express = require("express")
const { Router } = require("express")
const bodyParser = require("body-parser");
// const session = require("express-session");
// const ejs = require("ejs");
const mongoose = require("mongoose")
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
require("dotenv").config()
const cors = require("cors")

const app = express()
const router = Router()
const PORT = process.env.PORT || 3001

app.use(cors())
// app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
  }));

// app.use(session({
//     secret: "Supersecret",
//     resave: false,
//     saveUninitialized: false
//   }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(express.static("public"));

app.use(express.json({extended: true}))


// passport config
const User = require('./models/User');
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// routes
app.use("/api/auth", require("./routes/register"))
app.use("/api/auth", require("./routes/login"))
app.use("/api/top", require("./routes/years"))

async function start() {
    try {
        await mongoose.connect('mongodb://localhost:27017/coonDB')

        app.listen(PORT, () => {
            console.log("Port " + PORT + " is working, bro")
        })
    } catch (err) {
        console.error(err)
    }
}

// app.get("/api", (req, res) => {
//     res.json({
//         message: "Hello from backend express.js"
//     })
// })

start()

