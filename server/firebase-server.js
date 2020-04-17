const app = require('./config/express');
const functions = require("firebase-functions");

exports.api = functions.region('us-central1').https.onRequest(app);