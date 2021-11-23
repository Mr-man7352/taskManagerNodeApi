

const express = require('express');

const app = express();
const tasks = require('./routes/tasks')

//middleware, express.json(), if absent, we will not get data in request body
app.use(express.json())


//routes
app.get('/hello', (req, res) => {
    res.send('task manager app')
})

app.use('/api/v1/tasks', tasks)

const port = 3000;

app.listen(port, console.log(`server is listening on port ${port}...`))