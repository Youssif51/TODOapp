    const express = require('express');
    const { registerUser, loginUser, getProfile } = require('../Controllers/userController');
    const { verifyToken } = require('../Middlewares/authMiddleware');
    const router = express.Router();

    router.post('/', registerUser);
    router.post('/login', loginUser);
    router.get('/profile', verifyToken, getProfile);

    module.exports = router;
