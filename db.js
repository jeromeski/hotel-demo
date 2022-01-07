const mongoose = require("mongoose");

mongoose.connect(process.env.DB_LOCAL_URI, {
	useUnifiedTopology: true,
	useNewUrlParser: true
});

const connection = mongoose.connection;

connection.on("error", () => {
	console.log("Mongo DB Connection failed");
});

connection.on("connected", () => {
	console.log("Mongo DB Connection Successful");
});

module.exports = mongoose;
