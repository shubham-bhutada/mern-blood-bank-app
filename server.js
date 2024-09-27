const express = require('express');
const testRouter = require('./routes/testRoute');
require('dotenv').config();
const cors = require('cors');

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use('/api/v1/test', testRouter)

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log("Blood Bank server is running on PORT:", PORT);
})