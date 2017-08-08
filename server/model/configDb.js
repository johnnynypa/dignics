var dosConfig = require('dos-config')

var config={
	name : dosConfig.connectionData.name,
	username: dosConfig.connectionData.user,
	password: dosConfig.connectionData.password,
	options: {
		host: dosConfig.connectionData.domain,
		dialect: 'postgres',
		pool: {
			max: 5,
			min: 0,
			idle: 10000
		}
	}
}
module.exports = config;
