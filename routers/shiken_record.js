const {Router} = require('express');
const router = Router();
const shiken_record_control = require('../controllers/shiken_record.js')

router.get('/',shiken_record_control.list);
router.get('/new',shiken_record_control.get_new);
router.post('/',shiken_record_control.post);
router.get('/:id',shiken_record_control.detail_edit);
router.put('/',shiken_record_control.put);
router.delete('/:id',shiken_record_control.del);


module.exports = router 
