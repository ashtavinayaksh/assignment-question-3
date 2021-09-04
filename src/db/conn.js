const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/customer', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("DataBase Connected");
}).catch((err) => {
    console.log(err);
});