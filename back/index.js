const express = require("express");
const app = express();
const bodyParser = require("body-parser");

var writeRouter = require("./routes/writeRouter");
var db = require("./db.js")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.get("/", (req, res) => {
    var sql = "select * from user"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
    
    
});

app.use("/write-ups", writeRouter);

/* Error handler middleware */

app.get('/', function(req, res){
    console.log('app listening on port: '+port);
    res.send('tes express nodejs sqlite')
});

app.listen(3001, () => {
    console.log("Example app listening on port 3001!");
});

