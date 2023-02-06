const router = require('express').Router();
const apiRoutes = require('./api');
const { Blog } = require('../models');
// const homeRoutes = require('./home-routes.js');
// const dashboardRoutes = require('./dashboard-routes.js');


router.use('/api', apiRoutes);
// router.use('/dashboard', dashboardRoutes);
// router.use('/', homeRoutes);


router.get('/', async (req, res) => {
    try {
      const blogData = await Blog.findAll();
      const blogs = blogData.map(blog => blog.get({plain: true}));

      res,render('homepage', { blogs });
      
    } catch (err) {
      res.status(404).json(err);      
    }
});


module.exports = router;