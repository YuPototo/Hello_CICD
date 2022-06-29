const express = require("express");

const app = express();

app.get("/", (req, res) => {
    console.log("receive request");
    res.json({ message: "Hello CICD! v102" });
});

app.listen(3000, () => console.log("Example app is listening on port 3000."));
