var express = require('express');
var router = express.Router();
require('dotenv').config()


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/get-ip', (req, res) => {
  const clientIP = req.connection.remoteAddress || req.socket.remoteAddress;
  console.log('Client IP:', clientIP);
  // Handle the POST request
  res.send('POST request received!');
});

router.post('/test',  (req, res) => {
    res.status(200).send('ok')
  });
module.exports = router;
