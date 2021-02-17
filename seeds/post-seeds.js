const { Post } = require('../models');

const postdata = [
  {
    title: 'This is a post about beer',
    content: 'some content here all about my favorite beer.',
    user_id: 1
  },
  {
    title: 'What is my favorite drink?',
    content: 'Its beer! And I will tell you all about it',
    user_id: 2
  },
  {
    title: 'Guess what? I found a new brewery in my area!',
    content: 'And I am going to telll you all about it.',
    user_id: 3
  },

];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
