    const bcrypt = require('bcryptjs');
    const jwt = require('jsonwebtoken');
    const pool = require('../dp/dp');

    const registerUser = async (req, res) => {
        const { username, email, password } = req.body;

        try {
            const hashedPassword = bcrypt.hashSync(password, 10);
            const result = await pool.query(
                'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
                [username, email, hashedPassword]
            );
            res.status(201).json(result.rows[0]);
        } catch (error) {
            res.status(500).json({ message: 'Error registering user', error: error.message });
        }
    };

    const loginUser = async (req, res) => {
        const { email, password } = req.body;

        try {
            const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
            if (!result.rows.length) return res.status(400).json({ message: 'Invalid credentials' });

            const user = result.rows[0];
            console.log(user)
            const isMatch = bcrypt.compareSync(password, user.password);
            if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
            res.status(200).json({ token });
        } catch (error) {
            res.status(500).json({ message: 'Error logging in user' });
        }
    };

    const getProfile = async (req, res) => {
        console.log('User in Request:', req.user); 
        const userId = req.user.id;

        try {
            const result = await pool.query('SELECT id, username, email FROM users WHERE id = $1', [userId]);
            res.status(200).json(result.rows[0]);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching profile' });
        }
    };

    module.exports = { registerUser, loginUser, getProfile };