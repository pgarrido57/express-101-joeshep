const { Router } = require('express');
const path = require('path');

const carRouter = Router();

carRouter.get('/cars', (req, res, next) => {
  console.log("Fetching some cars");
  res.sendFile(path.join(__dirname, '../public', 'cars.html'));
});

module.exports = carRouter;
