const axios = require('axios');

axios.get('https://careers.google.com/api/jobs/jobs-v1/search/?category=SOFTWARE_ENGINEERING&degree=BACHELORS&employment_type=INTERN')
	.then(function (result) {
		console.log(result.data);
	});
