const express = require('express');
const {
    createTask,
    getTasks,
    updateTask,
    deleteTask,
} = require('../Controllers/taskController');
const { verifyToken } = require('../Middlewares/authMiddleware');
const router = express.Router();

router.post('/', verifyToken, createTask);
router.get('/', verifyToken, getTasks); 
router.put('/:id', verifyToken, updateTask);
router.delete('/:id', verifyToken, deleteTask);

module.exports = router;
