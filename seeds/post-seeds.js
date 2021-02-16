const { Post } = require('../models');

const postdata = [
  {
<<<<<<< HEAD
    title: 'This is a cool blog!',
    content: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    user_id: 1
  },
  {
    title: 'This blog is cooler blog!',
    content: 'https://nasa.gov/donec.json',
    user_id: 2
  },
  {
    title: 'Check this out!',
    content: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
=======
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
>>>>>>> 32b4407e18ea072b35d763c2c13fb90c99627d3c
    user_id: 3
  },

];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
