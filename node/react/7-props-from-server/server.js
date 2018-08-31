const express = require("express");
const app = express();

app.set("port", 3000);
app.set("view engine", "jsx");
app.set("views", __dirname + "/views");
app.engine("jsx", require("express-react-views").createEngine({transformViews: false}));

require("babel/register")({
    ignore: false
});

const data = [
    {title: "Shopping", detail: "Soda"},
    {title: 'Hair cut', detail: "13:00"}
];

app.use("/", function (req, res) {
    res.render("index", {data: data});
});

app.listen(app.get("port"), function () {
});