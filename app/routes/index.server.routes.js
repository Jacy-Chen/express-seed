//路由表，负责index - “/”页面的路由，调去controller来render页面

module.exports = function (app) {
	var index = require('../controller/index.server.controller');
	app.get('/',index.render);  
}