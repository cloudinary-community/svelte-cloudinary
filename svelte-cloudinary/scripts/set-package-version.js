// sed - i - e 's/%{__LIB_VERSION__}%/${VERSION}/g'./ dist / constants / analytics.js
import fs from 'node:fs'
import pkg from '../package.json' assert { type: 'json'}

fs.readFile('./dist/constants/analytics.js', 'utf8', function(err, data) {
	if (err) {
		return console.log(err);
	}
	const result = data.replace(/%{__LIB_VERSION__}%/g, pkg.version);

	fs.writeFile('./dist/constants/analytics.js', result, 'utf8', function(err) {
		if (err) return console.log(err);
	})
})
