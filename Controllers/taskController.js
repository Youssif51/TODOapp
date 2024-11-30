const pool = require('../dp/dp');


const createTask = async (req, res) => {
    const { title, description, status } = req.body;
    const userId = req.user.id;

    try {
        const result = await pool.query(
            'INSERT INTO tasks (title, description, status, user_id) VALUES ($1, $2, $3, $4) RETURNING *',
            [title, description, status, userId]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ message: 'Error creating task' });
    }
};


const getTasks = async (req, res) => {
    const userId = req.user.id;

    try {
        const result = await pool.query('SELECT * FROM tasks WHERE user_id = $1', [userId]);
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tasks' });
    }
};


const updateTask = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        const result = await pool.query(
            'UPDATE tasks SET status = $1 WHERE id = $2 RETURNING *',
            [status, id]
        );
        res.status(200).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ message: 'Error updating task' });
    }
};


const deleteTask = async (req, res) => {
    const { id } = req.params;

    try {
        await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
        res.status(204).send(`the task ${id} deleted successfully`);
    } catch (error) {
        res.status(500).json({ message: 'Error deleting task' });
    }
};

module.exports = { createTask, getTasks, updateTask, deleteTask };
