const {Router} = require('express');
const router = Router();
const gakusei_control = require('../controllers/gakusei.js')

router.get('/',gakusei_control.list);
router.get('/new',gakusei_control.get_new);
router.post('/',gakusei_control.post);
router.get('/:id',gakusei_control.detail_edit);
router.put('/',gakusei_control.put);
router.delete('/:id',gakusei_control.del);


module.exports = router 
