const express = require('express');
// const path = require('path');
const app = express();
require("./db/conn");

const Register=require("./models/register");

const port =process.env.PORT || 3000;
// const static_path = path.join(__dirname, "./public");
app.use(express.json());
// app.use(express.urlencoded({ extended: false}));
// app.use(express.static(static_path));

app.get('/', (req, res) => {
    res.send("hello from the server");

});

app.post('/register', async (req, res) => {
        try {
            const records=new Register(req.body);
               
            console.log(req.body);
            const insert = await records.save();
            res.send(insert);
        }catch (e) {
            res.status(400).send(e);
        }
})


app.get('/register', async (req, res) => {
    try {
        const getregdata =await Register.find({})
        res.send(getregdata);
    }catch (e) {
        res.status(201).send(e);
    }
})

// app.get('/register/:id', async (req, res) => {
//     try {
//         const _id=req.params.id;
//         const getregdatas =await Register.findById(_id);
//         res.send(getregdatas);
//     }catch (e) {
//         res.status(400).send(e);
//     }
// })

// app.patch('/register/:id', async (req, res) => {
//     try {
//         const _id=req.params.id;
//         const getregdatas =await Register.findByIdAndUpdate(_id,req.body,{new:true});
//         res.send(getregdatas);
//     }catch (e) {
//         res.status(500).send(e);
//     }
// })

// app.delete('/register/:id', async (req, res) => {
//     try {
//         const _id=req.params.id;
//         const getregdatas =await Register.findByIdAndDelete(req.params.id);
//         res.send(getregdatas);
//     }catch (e) {
//         res.status(500).send(e);
//     }
// })

app.listen(port,() => {
    console.log(`listening on port ${port}`);
})


