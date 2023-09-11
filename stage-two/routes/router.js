const router = require('express').Router();
const dataModyfyingRequest = require('../controller/controller');

router.post('/api', dataModyfyingRequest);
router.put('/api/:user_id', dataModyfyingRequest);
router.delete('/api/:user_id', dataModyfyingRequest);
router.get('/api/:user_id', dataModyfyingRequest);


module.exports = router;