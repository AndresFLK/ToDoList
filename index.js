import bodyParser from "body-parser";
import express from "express";



const app = express();
const port = 3000;
var task = "";
var taskList = [];
const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

function addItem(req, res, next){
  task = req.body["task"];
  if (task != undefined){
    taskList.push(task);
  };
  next();
};
app.use(addItem);


app.get("/", (req, res) => {
    var dateTime = new Date();
    var day = week[dateTime.getDay()];
    var dayNumber = dateTime.getDate();
    res.render("index.ejs", {
      day: day,
      dayNumber: dayNumber
    });
});


app.post("/submit", (req, res) => {
  var dateTime = new Date();
    var day = week[dateTime.getDay()];
    var dayNumber = dateTime.getDate();
  console.log(taskList);
  res.render("index.ejs", {
    items: taskList,
    day: day,
    dayNumber: dayNumber
  });
});





app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});