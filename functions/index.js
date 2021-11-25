const functions = require("firebase-functions");
const app = require('express')();
const { db } = require('./util/admin');

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
app.get('/getProjects', (req, res) => {
    db
        .collection('data')
        .doc('projects')
        .get()
		.then((doc) => {
            console.log(doc.data())
            let headers = doc.data()
			return res.json(headers);
		})
		.catch((err) => {
			console.error(err);
			return res.status(500).json({ error: err.code});
		});
})
exports.api = functions.https.onRequest(app);
