const mongoose = require('mongoose');

const dbName = 'TASK-MANAGER'

const connectionString = `mongodb+srv://fhusain01:${process.env.PASSWORD}@taskmanagernodejsexpres.n0izri2.mongodb.net/${dbName}?retryWrites=true&w=majority`

// To remove deprecation warning
mongoose.set('strictQuery', true);

mongoose.connect(connectionString).then(() => {
    console.log(`Connected to DB ...`)
}).catch((err) => {
    console.log(err)
})