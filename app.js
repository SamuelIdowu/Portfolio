const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/resume", function(req, res){
  res.sendFile(__dirname + "/resume.html");
});

app.get("/", function(req, res){
  res.sendFile(__dirname + "/stat.html");
});


// Handle form submission
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Create a transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL/TLS
    service: "Gmail",
    auth: {
      user: 'samuelidowu689@gmail.com',
      pass: 'luwnqoxqnzzzpypz',
    },
  });
  

  // Define email options
  const mailOptions = {
    from: email,
    to: 'thenasis2@gmail.com',
    subject: 'New message from your website',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.sendFile(__dirname + "/error.html");
    } else {
      console.log('Email sent: ' + info.response);
      res.sendFile(__dirname  + "/success.html");
    }
  });
});

// app.use(express.static('public'));
  
app.listen(3000, function() {
    console.log("Server started on port 3000");
});

