const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/svtech', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
    })
    .then(db => console.log('DB connected'))
    .catch(err => console.log(err));