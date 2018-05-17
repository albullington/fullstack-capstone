const express = require('express');
const React = require('react');
const { renderToString } = require('react-dom/server');
const { ServerStyleSheet } = require('styled-components');

const middleware = require('../middleware');
const App = require('../../public/dist/bundle-server');
const { Html } = require('../templates/layout');

const router = express.Router();

router.route('/')
  .get(middleware.auth.verify, (req, res) => {
    const sheet = new ServerStyleSheet();
    const appClass = App.default;
    const body = renderToString(sheet.collectStyles(React.createElement(appClass)));
    const styles = sheet.getStyleTags();
    const title = 'Server Side Rendering';
    res.status(200).send(Html({
      body,
      styles,
      title,
    }));
  });

router.route('/login')
  .get((req, res) => {
    res.render('login.ejs', { message: req.flash('loginMessage') });
  })
  .post(middleware.passport.authenticate('local-login', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true,
  }));

router.route('/signup')
  .get((req, res) => {
    res.render('signup.ejs', { message: req.flash('signupMessage') });
  })
  .post(middleware.passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true,
  }));

router.route('/profile')
  .get(middleware.auth.verify, (req, res) => {
    res.render('profile.ejs', {
      user: req.user, // get the user out of session and pass to template
    });
  });

router.route('/logout')
  .get((req, res) => {
    req.logout();
    res.redirect('/');
  });

router.get('/auth/google', middleware.passport.authenticate('google', {
  scope: ['email', 'profile'],
}));

router.get('/auth/google/callback', middleware.passport.authenticate('google', {
  successRedirect: '/profile',
  failureRedirect: '/login',
}));

router.get('/auth/facebook', middleware.passport.authenticate('facebook', {
  scope: ['public_profile', 'email'],
}));

router.get('/auth/facebook/callback', middleware.passport.authenticate('facebook', {
  successRedirect: '/profile',
  failureRedirect: '/login',
  failureFlash: true,
}));

router.get('/auth/twitter', middleware.passport.authenticate('twitter'));

router.get('/auth/twitter/callback', middleware.passport.authenticate('twitter', {
  successRedirect: '/profile',
  failureRedirect: '/login',
}));

module.exports = router;
