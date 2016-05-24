/**
 *
 * Mock backend
 * */

module.exports = function(app) {
	app.post('/login', function(req, res) {
		if (req.body.username === 'admin' && req.body.password === 'admin') {
			res.status(500).json({success: false, msg: '该用户已被禁用!'});
		} else {
			if (req.body.username === 'hjzheng' && req.body.password === 'hjzheng') {
				res.json({success: true});
			} else {
				res.json({success: false, msg: '请检查用户名及密码!'});
			}
		}
	});
};
