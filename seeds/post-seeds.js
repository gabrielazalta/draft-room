const { Post } = require('../models');

const postdata = [
  {
    title: 'This is a cool blog!.',
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
    user_id: 3
  },

];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
