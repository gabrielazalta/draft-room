const {
  Comment
} = require('../models');

const commentdata = [{
    comment_text: 'cool post bro!',
    user_id: 6,
    post_id: 1
  },
  {
<<<<<<< HEAD
    comment_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: 'Aliquam erat volutpat. In congue.',
    user_id: 3,
    post_id: 1
=======
    comment_text: 'wow, I am going to check that out',
    user_id: 2,
    post_id: 1
>>>>>>> 32b4407e18ea072b35d763c2c13fb90c99627d3c
  },
  {
    comment_text: 'hey, I like your posts!',
    user_id: 3,
<<<<<<< HEAD
    post_id: 2
  },
  {
    comment_text: 'In hac habitasse platea dictumst.',
    user_id: 1,
    post_id: 2
  },
  {
    comment_text: 'Vivamus vestibulum sagittis sapien.',
    user_id: 1,
    post_id: 3
  },
  {
    comment_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 3,
    post_id: 3
  },
  {
    comment_text: 'Sed vel enim sit amet nunc viverra dapibus.',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    user_id: 3,
    post_id: 1
  },
  {
    comment_text: 'Morbi a ipsum.',
    user_id: 3,
    post_id: 2
  },
  {
    comment_text: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    user_id: 3,
    post_id: 1
  },
  {
    comment_text: 'Donec ut mauris eget massa tempor convallis.',
    user_id: 3,
    post_id: 2
  },
  {
    comment_text:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
=======
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
>>>>>>> 32b4407e18ea072b35d763c2c13fb90c99627d3c
    user_id: 1,
    post_id: 1
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;