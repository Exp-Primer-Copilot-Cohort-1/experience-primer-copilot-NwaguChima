// Create web server
// 1. Import express
const express = require('express');
// 2. Create router object
const router = express.Router();
// 3. Import comments controller
const commentsController = require('../controllers/commentsController');

// 4. Define routes
// 4.1. GET route for comments list
router.get('/', commentsController.index);
// 4.2. GET route for comment detail
router.get('/:id', commentsController.detail);
// 4.3. POST route for comment create
router.post('/', commentsController.create);
// 4.4. PUT route for comment update
router.put('/:id', commentsController.update);
// 4.5. DELETE route for comment delete
router.delete('/:id', commentsController.delete);

// 5. Export router object
module.exports = router;