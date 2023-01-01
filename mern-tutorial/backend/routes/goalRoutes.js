const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({messgae: "Happy 2023"});
});

module.exports = router
