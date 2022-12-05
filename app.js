const express = require('express');
const app = express();

// routes
app.get('/home', (req, res) => {
    res.send('Task Manager App');
})

const port = 3000;
app.listen(3000, console.log(`Server is listening to port ${port} ...`))