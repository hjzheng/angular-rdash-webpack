var webpack = require('webpack');
var express = require('express');
var bodyParser = require('body-parser');
var	cookieParser = require('cookie-parser');
var chokidar = require('chokidar').watch('./mock');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.dev.config');

var app = express();
var compiler = webpack(config);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(cookieParser());
app.use(function(res, req, next) {
	require('./mock')(res, req, next);
});

chokidar.on('ready', function () {
	chokidar.on('all', function () {
		console.log('Server restarting...');

		Object.keys(require.cache).forEach(function (id) {
			if (/[\/\\]mock[\/\\]/.test(id)) {
				delete require.cache[id];
			}
		});
	});
});

compiler.plugin('done', function () {
	console.log('Client restarting...');

	Object.keys(require.cache).forEach(function (id) {
		if (/[\/\\]src[\/\\]/.test(id)) {
			delete require.cache[id];
		}
	});
});


app.use(webpackDevMiddleware(compiler, {
	publicPath: config.output.publicPath,
	stats: {colors: true}
}));

app.use(webpackHotMiddleware(compiler, {
	log: console.log
}));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/src/index.html');
});

app.listen(3000, 'localhost', function(err) {
	if (err) {
		console.log(err);
		return;
	}
	console.log('Listening at http://localhost:3000');
});


//通过http-proxy加后端代理
