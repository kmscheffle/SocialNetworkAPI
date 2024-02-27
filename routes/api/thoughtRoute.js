const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    deleteThought,
    updateThought,
    deleteReaction,
    addReaction,
} = require('../../controllers/thoughtController.js');


router.route('/').get(getThoughts).post(createThought);


router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

  router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction)
  
  router.route('/:thoughtId/reactions').post(addReaction);

module.exports = router;