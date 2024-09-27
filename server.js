const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome to blood bank app"
    })
})

const PORT = 8000;

app.listen(PORT, () => {
    console.log("Server is up and running on the PORT:", PORT);
})