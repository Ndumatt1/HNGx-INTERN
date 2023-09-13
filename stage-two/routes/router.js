const router = require('express').Router();
const dataRequest = require('../controller/controller');

router.post('/api', dataRequest);
router.get('/api/:user_id', dataRequest);
router.put('/api/:user_id', dataRequest);
router.delete('/api/:user_id', dataRequest);


module.exports = router;