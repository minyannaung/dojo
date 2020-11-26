const {Router} = require('express');
const router = Router();
const class_record_control = require('../controllers/class_record.js')

router.get('/',class_record_control.list);
router.get('/new',class_record_control.get_new);
router.post('/',class_record_control.post);
router.get('/:id',class_record_control.detail_edit);
router.put('/',class_record_control.put);
router.delete('/:id',class_record_control.del);


module.exports = router 
