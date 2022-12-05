const express = require('express');
const app = express();

// routes
app.get('/home', (req, res) => {
    res.send('Task Manager App');
})

const port = 3000;
app.listen(3000, console.log(`Server is listening to port ${port} ...`))

// app.get('/api/v1/tasks') --> get all the tasks
// app.post('/api/v1/tasks') --> create a new task
// app.get('/api/v1/tasks/:id') --> get single task
// app.get('/api/v1/tasks/:id') --> update task
// app.get('/api/v1/tasks/:id') --> delete tasks
