const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/scrunchies', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/scrunchies.html'));
});

router.get('/sales', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/sales.html'));
});

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;