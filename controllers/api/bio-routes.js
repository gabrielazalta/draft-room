const router = require('express').Router();
const {
  User,
  Post,
  Comment,
  Vote
} = require('../../models');

router.get('/', (req, res) => {
    User.findOne({
        where: {
            id: req.session.user_id
        },
        include: [{
            model: Post,
            attributes: ['id', 'title', 'content', 'user_id']
        }]
    }).then(dbUserData => {
        res.render('dashboard', {
            loggedIn: req.session.loggedIn,
            user: dbUserData.dataValues
        })
    })
});

module.exports = router;