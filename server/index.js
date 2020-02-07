const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 4000;

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// serving static files
app.use(express.static("public"));

const records = [
  { id: 1, name: "ravi", dob: "9/9/2019" },
  { id: 1, name: "vijay", dob: "10/10/2019" }
];

app.get("/records", (req, res) => res.status(200).send(records));
app.post("/login", (req, res) => {

  console.log('req', req.body);
  if(req.body.username === 'ravin@g.com') {
    return res.status(200).send('ok')
  }
 else {
    return res.status(401).send('invalid username');
  }
});

app.listen(PORT, () => console.log(`your server is running on port ${PORT}`));
