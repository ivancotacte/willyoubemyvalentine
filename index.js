const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cros = require('cors');

require('dotenv').config();
require('ejs');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, { dbName: "db_Ivan", useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cros());
app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});