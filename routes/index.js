require('dotenv').config()

const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const OAuth = require('oauth-1.0a');

/* GET home page. */
router.get('/authorize', (req, res) => {
  const redirect = req.query.redirect;
  const oauth = OAuth({
    consumer: {
      key: process.env.CONSUMER_KEY,
      secret: process.env.CONSUMER_SECRET,
    },
    hash_function(base_string, key) {
      return crypto
        .createHmac('sha1', key)
        .update(base_string)
        .digest('base64');
    },
    signature_method: 'HMAC-SHA1',
  });

  const request = {
    url: redirect,
    method: 'GET',
  };
  const token = {
    key: process.env.ACCESSOR_TOKEN,
    secret: process.env.ACCESSOR_SECRET,
  };

  const authorizeObj = oauth.authorize(request, token);

  const url = new URL(redirect);

  Object.keys(authorizeObj).forEach((key) => {
    url.searchParams.append(key, authorizeObj[key]);
  });

  res.redirect(url.toString())
});


module.exports = router;
