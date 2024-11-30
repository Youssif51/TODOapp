const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
const { errorHandler } = require('./Middlewares/errorMiddleware');

require('dotenv').config()
const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('todo api runing..')
})
app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);


app.use(errorHandler);

const PORT = process.env.PORT || 5000;  
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
