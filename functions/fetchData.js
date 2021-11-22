const { db } = require('../util/admin');

exports.getWebsiteData = (request, response) => {
	db
		.collection('data')
		.orderBy('createdAt', 'desc')
		.get()
		.then((data) => {
			let websiteData = [];
			data.forEach((doc) => {
				websiteData.push({
                    id: doc.id,
                    title: doc.data().title,
					body: doc.data().body,
					createdAt: doc.data().createdAt,
				});
			});
			return response.json(websiteData);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code});
		});
};