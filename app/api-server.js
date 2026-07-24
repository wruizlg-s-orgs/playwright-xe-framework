const express = require('express');

const app = express();

const PORT = 4000;


app.use(express.json());



const INITIAL_USERS = [

    {
        id: 1,
        name: 'John',
        email: 'john@test.com'
    },

    {
        id: 2,
        name: 'Mary',
        email: 'mary@test.com'
    }

];



let users = structuredClone(INITIAL_USERS);

let nextId = 3;



// ==========================
// TEST SUPPORT
// ==========================

function resetUsers() {

    users = structuredClone(INITIAL_USERS);

    nextId = 3;

}



app.post('/test/reset', (req, res) => {


    resetUsers();

    return res.status(204).send();


});



// ==========================
// USERS
// ==========================


app.get('/api/users', (req, res) => {


    res.status(200).json(users);


});





app.get('/api/users/:id', (req, res) => {


    const user = users.find(

        u => u.id === Number(req.params.id)

    );



    if (!user) {


        return res.status(404).json({

            message:'User not found'

        });


    }



    res.status(200).json(user);


});





app.post('/api/users', (req,res)=>{


    const user = {


        id: nextId++,


        name:req.body.name,


        email:req.body.email


    };



    users.push(user);


    res.status(201).json(user);


});






app.put('/api/users/:id',(req,res)=>{


    const id = Number(req.params.id);


    const user = users.find(

        u => u.id === id

    );



    if(!user){


        return res.status(404).json({

            message:'User not found'

        });


    }



    user.name = req.body.name;

    user.email = req.body.email;



    res.status(200).json(user);


});







app.delete('/api/users/:id',(req,res)=>{


    const id = Number(req.params.id);



    const index = users.findIndex(

        u => u.id === id

    );



    if(index === -1){


        return res.status(404).json({

            message:'User not found'

        });


    }



    users.splice(index,1);


    res.sendStatus(204);


});




// ==========================
// AUTH
// ==========================


app.post('/login',(req,res)=>{


    const {

        username,

        password

    } = req.body;



    if(

        username === 'admin' &&

        password === '123456'

    ){


        return res.json({

            token:'fake-token-12345'

        });


    }



    return res.status(401).json({

        message:'Invalid credentials'

    });


});






app.get('/profile',(req,res)=>{


    const auth = req.headers.authorization;



    if(auth !== 'Bearer fake-token-12345'){


        return res.status(401).json({

            message:'Unauthorized'

        });


    }



    res.json({

        id:1,

        username:'admin',

        role:'administrator'

    });


});






app.listen(PORT,()=>{


    console.log(

        `API running on http://localhost:${PORT}`

    );


});