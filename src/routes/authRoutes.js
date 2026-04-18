const express = require('express');
const router = express.Router();

// Временный маршрут для проверки работы
router.get('/test', (req, res) => {
  res.json({ message: 'Auth route works!' });
});

// Здесь позже будут эндпоинты регистрации и логина

module.exports = router;