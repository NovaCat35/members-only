var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const sassMiddleware = require("node-sass-middleware");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
// const { bcrypt } = require("./src/config/bcrypt");
const bcrypt = require("bcryptjs");
const User = require("./src/models/user");

// Routes
var indexRouter = require("./src/routes/index");
var usersRouter = require("./src/routes/users");

if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}

var app = express();

// Connect to Mongoose
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const dev_db_url = process.env.MONGODB_DEV_URL;
const mongoDB = process.env.MONGODB_URL || dev_db_url;
main().catch((err) => console.log(err));
async function main() {
	await mongoose.connect(mongoDB);
}

// Setting up the LocalStrategy
passport.use(
	new LocalStrategy(async (username, password, done) => {
		try {
			const user = await User.findOne({ username: username });
			if (!user) {
        // no user found
				return done(null, false, { message: "Incorrect username" });
			}

			const match = await bcrypt.compare(password, user.password);
			if (!match) {
				// passwords do not match!
				return done(null, false, { message: "Incorrect password" });
			}
			return done(null, user);
		} catch (err) {
			return done(err);
		}
	})
);

// Passport sessions and serialization
passport.serializeUser((user, done) => {
	done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
	try {
		const user = await User.findById(id);
		done(null, user);
	} catch (err) {
		done(err);
	}
});

// view engine setup
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));
// Note: I don't even think we need sassMiddleware since the script in "package.json" takes care of the scss -> css
app.use(
	sassMiddleware({
		src: path.join(__dirname, "public", "scss"),
		dest: path.join(__dirname, "public", "stylesheets"), // CSS output directory (remains the same)
		indentedSyntax: false, // true = .sass and false = .scss
		debug: true,
		outputStyle: "compressed",
	})
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;
