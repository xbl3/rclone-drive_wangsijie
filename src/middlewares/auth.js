const authService = require('../services/auth');

module.exports = (req, res, next) => {
    if (/^\/(login|logout)/.test(req.path)) {
        return next();
    }
    if (authService.checkLogin(req, res)) {
        return next();
    }
    return res.redirect('/login');
};