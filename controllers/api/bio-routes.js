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
        console.log("||||||||||||||||||||||||")
        console.log(dbUserData);
        res.render('dashboard', {
            loggedIn: req.session.loggedIn,
            user: dbUserData.dataValues
        })
    })
});

//create/edit a bio
router.post('/', (req, res) => {
    User.update({
            bio: req.body.bio,
        }, {
            where: {
                id: req.session.user_id
            }
        })
        .then(dbUserData => {
            res.json(dbUserData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);

        });
});


module.exports = router;