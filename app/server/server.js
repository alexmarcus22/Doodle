var express = require("express");
var cors = require("cors");
var mongoose = require("mongoose");
var path = require("path");
const router = express.Router();

require("dotenv").config();

var app = express();
var port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI
mongoose.connect(uri, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
})

const connection = mongoose.connection;
connection.once('open', () => {
	console.log("MongoDB is connected")
})

app.use(express.static(path.join(__dirname, "..", "build")));

app.listen(port, () => {
	console.log('Server is running on:', port)
})