const express = require("express");
const path = require('path')
const app = express();
const port = process.env.PORT || 3001;

const indexRouter = require("./routes/indexRouter");

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);


app.listen(port, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
