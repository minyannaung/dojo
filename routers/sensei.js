const {Router} = require('express');
const router = Router();
const sensei_control = require('../controllers/sensei.js')

router.get('/',sensei_control.list);
router.get('/new',sensei_control.get_new);
router.post('/',sensei_control.post);
router.get('/:id',sensei_control.detail_edit);
router.put('/',sensei_control.put);
router.delete('/:id',sensei_control.del);


module.exports = router 
