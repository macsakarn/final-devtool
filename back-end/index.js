const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const configs = require("./configs/database.js");
const UserModel = require("./model/model.js");
const app = express();
const port = 4000;

mongoose.Promise = global.Promise;
mongoose.connect(configs.mongouri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());

app.post("/otp", async (req, res) => {
  var chackUser = await UserModel.find({ phone: req.body.phone });
  if (chackUser.length == 0) {
    var val = Math.floor(1000 + Math.random() * 9000);
    var newPhone = new UserModel({ phone: req.body.phone, otp: val });
    await newPhone.save();
    res.send({ otp: ""+val });
  } else {
    res.send({ otp: chackUser[0].otp });
  }
});

app.post("/chackotp", async (req, res) => {
    var chackUser = await UserModel.find(req.body);
    if (chackUser.length == 0) {
        res.send({text:"OTP ผิดครับพี่"});
    } else {
        res.send({text:"OTP ถูกแล้วครับพี่"});
    }
  });

app.listen(port, () => {
  console.log(`run on port ${port}`);
});
