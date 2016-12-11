//配置express，载入路由表，以及其他相关三方模块
var config = require('./config');
var express = require('express'),
morgan = require('morgan'),
compress = require('compression'),
bodyParser = require('body-parser'),
methodOverride = require('method-override');
session = require('express-session');

module.exports = function () {
	var app = express();

	//配置其他中间件
	if(process.env.NODE_DEV === 'development') {
		app.use(morgan('dev'));
	} else if (process.env.NODE_DEV === 'production') {
		app.use(compress());
	}

	app.use(bodyParser.urlencoded({
		extended : true
	}));

	app.use(bodyParser.json());
	app.use(methodOverride());

	app.use(session({
		saveUninitialized: true,
		resave: true,
		secret: config.sessionSecret
	}));

	//设置express配置中的环境变量
	app.set('views', './app/views');
	app.set('view engine', 'ejs');

	require('../app/routes/index.server.routes.js')(app);

	//静态文件服务的优先级在路由之下
	app.use(express.static('./public'));


	return app;
}