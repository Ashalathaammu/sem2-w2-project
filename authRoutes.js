const express = require('express');
const { signup, login, logout } = require('../controllers/authController');
const { protect, restrictTo } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logout);

// Example of a protected route
router.get('/dashboard', protect, restrictTo('student', 'instructor'), (req, res) => {
    res.json({ message: `Welcome ${req.user.role}` });
});

module.exports = router;
