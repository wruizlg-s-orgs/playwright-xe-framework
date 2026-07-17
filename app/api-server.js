const express = require('express');

const app = express();

const PORT = 4000;


app.use(express.json());


let users = [

    {
        id: 1,
        name: "John",
        email: "john@test.com"
    },

    {
        id: 2,
        name: "Mary",
        email: "mary@test.com"
    }

];


// GET USERS

app.get('/api/users', (req, res) => {

    res.status(200).json(users);

});


// GET USER BY ID

app.get('/api/users/:id', (req, res) => {

    const user = users.find(
        u => u.id === Number(req.params.id)
    );


    if (!user) {

        return res.status(404).json({

            message: "User not found"

        });

    }


    res.status(200).json(user);

});


// CREATE USER

app.post('/api/users', (req, res) => {


    const user = {

        id: users.length + 1,

        name: req.body.name,

        email: req.body.email

    };


    users.push(user);


    res.status(201).json(user);


});


// UPDATE USER

app.put('/api/users/:id', (req,res)=>{


    const user = users.find(
        u => u.id === Number(req.params.id)
    );


    if(!user){

        return res.status(404).json({

            message:"User not found"

        });

    }


    user.name = req.body.name;

    user.email = req.body.email;


    res.status(200).json(user);


});


// DELETE USER

app.delete('/api/users/:id',(req,res)=>{


    const index = users.findIndex(

        u => u.id === Number(req.params.id)

    );


    if(index === -1){

        return res.status(404).json({

            message:"User not found"

        });

    }


    users.splice(index,1);


    res.status(204).send();


});



app.listen(PORT,()=>{

    console.log(
        `API running on http://localhost:${PORT}`
    );

});