const router = require('express').Router();
const sequelize = require('../config/connection');
const {
    Post,
    User,
    Comment,
    Vote
} = require('../models');
const withAuth = require('../utils/auth');

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

// get all posts for dashboard
router.get('/', withAuth, (req, res) => {
    // console.log(req.session);
    // console.log('======================');
    Post.findAll({
            where: {
                user_id: req.session.user_id
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
                    attributes: ['username', 'bio']
                }
            ]
        })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({
                plain: true
            }));
            console.log(dbPostData.post);
            res.render('dashboard', {
                posts,
                loggedIn: true,
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/edit/:id', withAuth, (req, res) => {
    Post.findByPk(req.params.id, {
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
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        .then(dbPostData => {
            if (dbPostData) {
                const post = dbPostData.get({
                    plain: true
                });

                res.render('edit-post', {
                    post,
                    loggedIn: true
                });
            } else {
                res.status(404).end();
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;