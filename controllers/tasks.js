const getAllTasks = (req, res) => {
    res.send('Get all tasks');
}

const createTask = (req, res) => {
    res.send('Create new task');
}

const getTask = (req, res) => {
    res.send('Get particular task');
}

const updateTask = (req, res) => {
    res.send('Update task');
}

const deleteTask = (req, res) => {
    res.send('Delete task');
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}