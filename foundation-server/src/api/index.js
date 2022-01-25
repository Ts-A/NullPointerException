const router = require('express').Router();
const asyncHandler = require('express-async-handler');

router.get(
  '/',
  asyncHandler((req, res) => {
    res.status(200).json({ message: 'Number of apis available: 0' });
  })
);

module.exports = router;
