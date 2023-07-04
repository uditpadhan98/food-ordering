const express = require("express");
const app = express();
const port = 5000;
const mongoDB = require("./db");
mongoDB();

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Use this after the variable declaration

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Origin", "http://localhost:3000");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin,X-Requested-with,Content-Type,Accept"
//   );
//   next();
// });

// const bodyParser = require("body-parser")

// app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/DisplayData"));
app.use("/api", require("./Routes/OrderData"));
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
