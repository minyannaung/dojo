
const {Router} = require('express');
const router = Router();
const shiken_control = require('../controllers/shiken.js')

router.get('/',shiken_control.list);
router.get('/new',shiken_control.get_new);
router.post('/',shiken_control.post);
router.get('/:id',shiken_control.detail_edit);
router.put('/',shiken_control.put);
router.delete('/:id',shiken_control.del);


module.exports = router 
