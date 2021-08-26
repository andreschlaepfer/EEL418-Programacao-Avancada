const router = require('express').Router();
let Item = require('../models/item.model');

//http GET
router.route('/').get((req, res) => {
  Item.find()
    .then(items => res.json(items))
    .catch(err => res.status(400).json('Error: ' + err));
})

//http POST
router.route('/add').post((res, req) => {
  const name = req.body.name;

  const newItem = new Item({name});

  newItem.save()
    .then(() => res.json('Item added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;