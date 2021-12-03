const express = require("express");
var email = require("emailjs");
const app = express();
require('dotenv').config() ;
// For parsing application/json
app.use(express.json());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use((req,res,next) =>{
    res.setHeader('Access-Control-Allow-Origin','*') ;
    res.setHeader('Access-Control-Allow-Headers','Origin ,X-Requested-With ,Content-Type ,Accept ,Authorization' )
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PATCH,DELETE')
    next() ;
 }) ;

var server = new email.SMTPClient({
  user: "connectwithexpert21@gmail.com",
  password: process.env.password,
  host: "smtp.gmail.com",
  ssl: true,
});

app.post("/sendMail", function (req, res) {
  const message= "<html>"+req.body.message+"<br>Regards,<br>Name:"+req.body.Name+"<br>Branch:"+req.body.Branch+"<br>Roll:"+req.body.Roll+"<br>Email:"+req.body.Email+"</html>"
  console.log(message) ;
  server.send(
    {
      from: req.body.from,
      to: req.body.to,
      cc: req.body.cc,
      subject: req.body.subject,
      text: "",
      attachment: [
        { data: message, alternative: true},
      ],
    },
    function (err, message) {
      if (err) {
        res.send(false);
      } else {
        res.send(true);
      }
      console.log(err || message);
    }
  );
});

// app.get("/about", function (req, res) {
//   res.sendFile(__dirname + "/signup.html");
// });

// app.get("/weather", function (req, res) {
//   res.sendFile(__dirname + "/signup.html");
// });

app.get("*", function (req, res) {
  res.send("404 error");
});

app.listen(process.env.PORT || 3001, function () {
  console.log("server is running");
});
