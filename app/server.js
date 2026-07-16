const express = require('express');

const app = express();

const PORT = 3000;


app.use(express.static('app/public'));



app.get('/api/health', (req, res) => {

    res.json({
        status: 'UP'
    });

});



app.listen(PORT, () => {

    console.log(`Application running on http://localhost:${PORT}`);

});