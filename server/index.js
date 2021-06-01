const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const supplyChainRoutes = require('./routes/supplyChain.js');

const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.use(express.json());
// app.use(bodyParser.json({ limit: '30mb', extended: true }));
// app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('', supplyChainRoutes);

const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGO_ATLAS_KEY, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server Running on Port: http://localhost:${PORT}`)
        )
    )
    .catch(error => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);
