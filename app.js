const express = require('express');
const app = express();
const tasks = require(`./routes/tasks`)

// middleware
app.use(express.json());

// routes
app.get('/home', (req, res) => {
    res.send('Task Manager App');
})

app.use('/api/v1/tasks', tasks);

const port = 3000;
app.listen(3000, console.log(`Server is listening to port ${port} ...`))

// app.get('/api/v1/tasks') --> get all the tasks
// app.post('/api/v1/tasks') --> create a new task
// app.get('/api/v1/tasks/:id') --> get single task
// app.get('/api/v1/tasks/:id') --> update task
// app.get('/api/v1/tasks/:id') --> delete tasks
