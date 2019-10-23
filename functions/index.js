const functions = require('firebase-functions');
const express = require('express');
const { sapper } = require('./__sapper__/build/server/server.js');

const middleware = express().use(sapper.middleware());

exports.app = functions.https.onRequest((req, res) => {
  req.baseUrl = '';
  middleware(req, res);
});
