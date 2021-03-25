const express = require("express");
const cors = require("cors");
const PORT = 9000;
const userRoute = require("./route/user.js");
const hotelRoute = require('./route/hotel')
const transRoute = require('./route/transactionRoute')
const logging = require("./middleware/logging.js")

const app = express();

app.use(express.json());
app.use(cors());
app.use(logging)
app.use("/auth", userRoute);
app.use('/hotel', hotelRoute)
app.use('/public', express.static('public'))
app.use('/transactions', transRoute)



app.get("/", (req, res) => {
  res.send("this is auth system my boy");
});

app.listen(PORT, () => console.log(`app running in port ${PORT}`));
