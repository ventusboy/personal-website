/* exports.getWebsiteData = (request, response) => {
    data = [
        {
            'id': '1',
            'title': 'greeting',
            'body': 'Hello world from sharvin shah' 
        },
        {
            'id': '2',
            'title': 'greeting2',
            'body': 'Hello2 world2 from sharvin shah' 
        }
    ]
    return response.json(data);
}
 */
const { db } = require('../util/admin');

exports.getWebsiteData = (request, response) => {
	db
        .collection('data')
        .doc('WMAA00bAtbJH8f6T7CPj')
        .get()
		.then((doc) => {
            console.log(doc.data())
            let headers = doc.data()
			return response.json(headers);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code});
		});
};