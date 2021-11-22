const functions = require("firebase-functions");
const app = require('express')();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const {
    getWebsiteData
} = require('./API/data')

app.get('/data', getWebsiteData);
exports.api = functions.https.onRequest(app);
