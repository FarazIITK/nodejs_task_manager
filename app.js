const express = require('express');
const app = express();
const tasks = require(`./routes/tasks`)
const connectDB = require('./db/connect');
require('dotenv').config();

// middleware
app.use(express.json());

// routes
app.get('/home', (req, res) => {
    res.send('Task Manager App');
})

app.use('/api/v1/tasks', tasks);

const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(3000, console.log(`Server is listening on port ${port} ...`))
    } catch (error) {
        console.log(error);
    }
}

start();


// app.get('/api/v1/tasks') --> get all the tasks
// app.post('/api/v1/tasks') --> create a new task
// app.get('/api/v1/tasks/:id') --> get single task
// app.get('/api/v1/tasks/:id') --> update task
// app.get('/api/v1/tasks/:id') --> delete tasks
