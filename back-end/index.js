const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const configs = require("./configs/database.js");
const UserModel = require("./model/model.js");
const app = express();
const port = 4000;

const { PrometheusExporter } = require("@opentelemetry/exporter-prometheus");
const { MeterProvider } = require("@opentelemetry/sdk-metrics-base");

// Add your port and startServer to the Prometheus options
const options = { port: 9464, startServer: true };
const exporter = new PrometheusExporter(options);

// Register the exporter
const meter = new MeterProvider({
  exporter,
  interval: 1000,
}).getMeter("demo-prometheus");

// Now, start recording data
const counter = meter.createCounter("count_database", {
  description: "count database",
});

mongoose.Promise = global.Promise;
mongoose.connect(configs.mongouri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());

app.post("/otp", async (req, res) => {
  counter.add(1, { service_name: "otpservice" });
  counter.add(1, {
    service_name: "otpservice",
    status: "success",
    path: "/otp",
  });
  counter.add(1, {
    service_name: "otpservice",
    status: "failure",
    path: "/otp",
  });
  counter.add(1, {
    service_name: "otpservice",
    status: "data not found",
    path: "/otp",
  });
  var chackUser = await UserModel.find({ phone: req.body.phone });
  if (chackUser.length == 0) {
    var val = Math.floor(1000 + Math.random() * 9000);
    var newPhone = new UserModel({ phone: req.body.phone, otp: val });
    await newPhone.save();
    res.send({ otp: "" + val });
  } else {
    res.send({ otp: chackUser[0].otp });
  }
});

app.post("/chackotp", async (req, res) => {
  counter.add(1, { service_name: "chackotp" });
  counter.add(1, {
    service_name: "chackotp",
    status: "success",
    path: "/chackotp",
  });
  counter.add(1, {
    service_name: "chackotp",
    status: "failure",
    path: "/chackotp",
  });
  counter.add(1, {
    service_name: "chackotp",
    status: "data not found",
    path: "/chackotp",
  });
  var chackUser = await UserModel.find(req.body);
  if (chackUser.length == 0) {
    res.send({ text: "OTP ผิดครับพี่" });
  } else {
    res.send({ text: "OTP ถูกแล้วครับพี่" });
  }
});

app.listen(port, () => {
  console.log(`run on port ${port}`);
});
