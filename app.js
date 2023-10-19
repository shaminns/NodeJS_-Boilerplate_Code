const env = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
// Constants
const Message = require("./Constants/Message.js");
const ResponseCode = require("./Constants/ResponseCode.js");
// Helper 
const ResponseHelper = require("./Services/ResponseHelper");
// Required Routes
const indexRouter = require("./Routes/Index");
const userRoutes = require("./Routes/User");
///
const dbUrl = "mongodb://localhost:27017/testDb";

// Connect Mongo DB
mongoose.connect(
	dbUrl,
	{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
	(err) => {
		if (!err) {
			console.log("Connection Successful");
		} else {
			console.log("Connection not successful", err);
		}
	}
);
mongoose.Promise = global.Promise;
// Middlewares
app.use(morgan("dev"));
app.use("/Uploads", express.static("Uploads"));
app.use("/Assets", express.static("Assets"));
app.use("/Static", express.static("Static"));
// app.use(express.static(__dirname + '/Assets'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Methods",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization, Content-Type, Signature"
	);
	if (req.method === "OPTIONS") {
		res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
		return res.status(200).json({});
	}
	next();
});
// Routes which should handle requests
app.use("/", indexRouter);
app.use("/api/user", userRoutes);
// Default Route When nothing matches
app.use((req, res, next) => {
	const error = new Error("API Not found :o :o");
	error.status = 404;
	next(error);
});
app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message,
		},
	});
});
module.exports = app;
