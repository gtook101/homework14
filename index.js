const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

app.use(express.static(_dirname + "/public"));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "hbs");
app.engine(
  "hbs",
  exphbs({
    extname: "hbs",
    defaultLayout: "index",
    layoutsDir: _dirname + "/views/layouts",
    partialsDir: _dirname + "/views/partials",
  })
);

const port = 8900;
app.listen(port);
console.log(`Listening to server: http://localhost:${port}`);

app.get("/", (req, res) => {
  res.render("main");
});
