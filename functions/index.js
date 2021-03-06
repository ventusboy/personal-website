const functions = require("firebase-functions");
const app = require('express')();
// const cors = require('cors')
const { db } = require('./util/admin');
const cors = require('cors')({origin: '*'});

app.use(cors)
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

app.get('/getAbout', (req, res) => {
    db
        .collection('data')
        .doc('WMAA00bAtbJH8f6T7CPj')
        .get()
		.then((doc) => {
            // console.log(doc.data())
            let data = doc.data()
			return res.json(data);
		})
		.catch((err) => {
			console.error(err);
			return res.status(500).json({ error: err.code});
		});
});

app.get('/getProjects', (req, res) => {
    db
        .collection('data')
        .doc('projects')
        .get()
		.then((doc) => {
            // console.log(doc.data())
            let data = doc.data()
			return res.json(data);
		})
		.catch((err) => {
			console.error(err);
			return res.status(500).json({ error: err.code});
		});
})
exports.api = functions.https.onRequest(app);
