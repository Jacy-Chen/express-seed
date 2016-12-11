//控制器，用来渲染页面的view

exports.render = function (req, res) {
	if(req.session.lastVisit) {
		console.log("Last visit at: " + req.session.lastVisit);
	}

	req.session.lastVisit = new Date();

	res.render('index', {
		title: 'Hello World'
	});
};