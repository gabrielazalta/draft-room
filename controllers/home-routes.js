const router = require('express').Router();
const sequelize = require('../config/connection');
const {
    Post,
    User,
    Comment,
    Vote
} = require('../models');


router.get('/', (req, res) => {
    // console.log(req.session)
    res.render('landing-page')
});

router.get('/signup', (req, res) => {
    res.render('signup')
});

router.get('/login', (req, res) => {
    res.render('login')
});

router.get('/new-post', (req, res) => {
    console.log(req.session.user_id)
    res.render('new-post', {
        loggedIn: req.session.loggedIn,
        user_id: req.session.user_id
    })
});


// get all posts for homepage
router.get('/homepage', (req, res) => {
    console.log('======================');
    Post.findAll({
            attributes: [
                'id',
                'content',
                'user_id',
                'title',
                'created_at',
                [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
            ],
            include: [{
                    model: Comment,
                    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username', 'id']
                }
            ]
        })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({
                plain: true
            }));

            res.render('homepage', {
                posts,
                loggedIn: req.session.loggedIn,
                user_id: req.session.user_id
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/post/:id', (req, res) => {
    Post.findOne({
            where: {
                id: req.params.id
            },
            attributes: [
                'id',
                'content',
                'title',
                'created_at',
                'user_id',
                [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
            ],
            include: [{
                    model: Comment,
                    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username', 'id']
                }
            ]
        })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({
                    message: 'No post found with this id'
                });
                return;
            }

            // serialize the data
            const post = dbPostData.get({
                plain: true
            });

            res.render('single-post', {
                post,
                loggedIn: req.session.loggedIn,
                user_id: req.session.user_id
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


//find one user
router.get('/user-page/:id', (req, res) => {
    const userPromise = User.findOne({
        where: {
            id: req.params.id
        },
        include: [{
            model: Post,
            attributes: ['id', 'title', 'content', 'user_id']
        }]
    });
    const postPromise = Post.findAll({
        where: {
            user_id: req.params.id
        },
        attributes: [
            'id',
            'content',
            'title',
            'created_at',
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
        ],
        include: [{
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username', 'bio']
                }
            },
            {
                model: User,
                attributes: ['username', 'bio', 'id']
            }
        ]
    });

    Promise.all([userPromise, postPromise])
        .then(data => {
            const posts = data[1].map(post => post.get({
                plain: true
            }));
            res.render('user-page', {
                loggedIn: req.session.loggedIn,
                user: data[0].dataValues,
                posts,
                loggedIn: true,
            });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        });
});

module.exports = router;