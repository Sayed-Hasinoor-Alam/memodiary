const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Registration", {
    // useCreateIndex: true,
    useNewurlParser: true,
    // useUmifiedTopology: true,
    
}).then(()=>{
    console.log("connection success");

}).catch((e)=>{
    console.log("connection error", e);
});

