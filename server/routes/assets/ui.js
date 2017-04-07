var express = require('express');
var router  = express.Router();
uiApi = require('../../middleware/assets/ui');

router.get('/', uiApi.index);

// router.get('/:type/:templateFolder/:name', uiApi.managePartials);

module.exports = router;
