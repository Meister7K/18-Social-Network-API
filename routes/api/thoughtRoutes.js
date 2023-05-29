const router = require('express').Router();
const {getThoughts,addThought,thought,updateThought,deleteThought,getReactions,addThought,deleteReaction} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(addThought);

router.route('/:thoughtId').get(thought).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/reactions').get(getReactions).post(addReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;