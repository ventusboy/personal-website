const { db } = require('../util/admin');

exports.getWebsiteData = (request, response) => {
	db
        .collection('data')
        .doc('projects')
        .get()
		.then((doc) =>{
            // console.log(doc.data())
            let headers = doc.data()
			return response.json(headers);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code});
		});
};