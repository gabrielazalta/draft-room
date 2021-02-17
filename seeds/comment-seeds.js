const {
  Comment
} = require('../models');

const commentdata = [{
    comment_text: 'cool post bro!',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'wow, I am going to check that out',
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: 'hey, I like your posts!',
    user_id: 3,
    post_id: 1
  },
  {
    comment_text: 'nice :)',
    user_id: 3,
    post_id: 2
  },
  {
    comment_text: 'love this',
    user_id: 1,
    post_id: 2
  },
  {
    comment_text: 'I agree!',
    user_id: 1,
    post_id: 3
  },
  {
    comment_text: 'yesss',
    user_id: 3,
    post_id: 3
  },
  {
    comment_text: 'woohoo!',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'no way!',
    user_id: 3,
    post_id: 1
  },
  {
    comment_text: 'cool',
    user_id: 3,
    post_id: 2
  },
  {
    comment_text: 'sounds awesome',
    user_id: 3,
    post_id: 1
  },
  {
    comment_text: 'wow wow',
    user_id: 3,
    post_id: 2
  },
  {
    comment_text: '!!!!!',
    user_id: 1,
    post_id: 1
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;