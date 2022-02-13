const express = require("express");
const app = express();
const email = require('emailjs') ;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("express-async-errors");
require("dotenv").config();
const cors = require("cors");
app.use(
  cors({
    origin: true,
  })
);

const connectDB = require("./db/connect");
const router = require("./routes/routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/test", (req, res) => {
  res.json({
    massage: "API running succesfully",
  });
});
app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>Navigate to /api/<> for other routes");
});

let server = new email.SMTPClient({
  user: "connectwithexpert21@gmail.com",
  password: process.env.SMTPClientPassword,
  host: "smtp.gmail.com",
  ssl: true,
});

app.post("/sendMail", function (req, res) {
  const message =
    "<html>" +
    req.body.message +
    "<br>Regards,<br>Name:" +
    req.body.Name +
    "<br>Branch:" +
    req.body.Branch +
    "<br>Roll:" +
    req.body.Roll +
    "<br>Email:" +
    req.body.Email +
    "</html>";
  console.log(message);
  server.send(
    {
      from: req.body.from,
      to: req.body.to,
      cc: req.body.cc,
      subject: req.body.subject,
      text: "",
      attachment: [{ data: message, alternative: true }],
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

app.use("/api", router);

const PORT = process.env.PORT || 8000;
const start = async (req, res) => {
  await connectDB(process.env.MONGO_URI);
  try {
    app.listen(PORT);
    console.log(`Listening on port ${PORT}`);
  } catch (error) {
    console.log(error);
  }
};
start();
