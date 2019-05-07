var express = require("express");
var path = require("path");


const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

let reservations = [];
let waitList = [];


app.get("/", function (req, res) {

    // res.send("<h1>Home Page, Mofos");
    res.sendFile(path.join(__dirname, "index.html"));
});


app.get("/tables", function (req, res) {

    // res.send("<h1>Here you get to check out our tables");
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reservations", function (req, res) {

    // res.send("<h1>Make a reservation");
    res.sendFile(path.join(__dirname, "reservations.html"));
});


// app.get("/api/")

app.post("/api/reservations", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    // newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newReservation);
  
    if (reservations.length >= 5){
        reservations.push(newReservation);

    }else{waitList.push(newReservation)};
  
    res.json(newReservation);
  });


// App Start!
  app.listen(PORT, () => console.log("App listening on Port: " + PORT))