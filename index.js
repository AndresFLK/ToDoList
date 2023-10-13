import bodyParser from "body-parser";
import express from "express";



const app = express();
const port = 3000;
var task = "";
var taskList = [];

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
  
    res.render("index.ejs", {
      day: new Date().getDate()
    });
});


app.post("/submit", (req, res) => {
  console.log(taskList);
  res.render("index.ejs", {
    items: taskList
  });
});





app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});