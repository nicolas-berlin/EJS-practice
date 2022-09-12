const express = require('express');
const app = express();
const port = 4000;

const routes = require("./routes/mainRouter");
app.set("views", "./views/pages");
app.set('view engine', 'ejs');

app.use(express.static("public"));


app.use('/', routes);


app.listen(port, () => {
    console.log(`Currently on port: ${port}`)
});
