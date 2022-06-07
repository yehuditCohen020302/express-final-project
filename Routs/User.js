const express= require('express');
const router= express.Router();
const controller= require('../Controllers/User')


/* GET users listing. */
router.get('/',controller.getUser);

router.post('/',controller.addUser);

router.get('/:fullName/:password', controller.getOneUser);

module.exports = router;
