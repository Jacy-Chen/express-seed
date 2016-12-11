//配置express，初始化好路由表

var express = require('express');

module.exports = function () {
	var app = express();
	require('../app/routes/index.server.routes.js')(app);
	return app;
}