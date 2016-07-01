$(document).on('ready', function () {
	console.log('test ready');
	require(['test'], function (c) {
		console.log('test', Boolean(c));
		console.log(c);
	});
});
