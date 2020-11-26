const {Router} = require('express');
const router = Router();
const class_control = require('../controllers/class.js')

router.get('/',class_control.list);
router.get('/new',class_control.get_new);
router.post('/',class_control.post);
router.get('/:id',class_control.detail_edit);
router.put('/:id',class_control.put);
router.delete('/:id',class_control.del);


module.exports = router 
