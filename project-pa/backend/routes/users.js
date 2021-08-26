const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((res, req) => {
  //const username = String(req.body.username);
  //const cellnumber = Number(req.body.cellnumber);

  //const newUser = new User({username});

  // newUser.save()
  //   .then(() => res.json('User added!'))
  //   .catch(err => res.status(400).json('Error: ' + err));
  res.send('POST request to homepage');
});

module.exports = router;