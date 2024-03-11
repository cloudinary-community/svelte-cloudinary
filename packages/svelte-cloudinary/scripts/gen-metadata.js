// sed - i - e 's/%{__LIB_VERSION__}%/${VERSION}/g'./ dist / constants / analytics.js
import fs from 'node:fs'
import pkg from '../package.json' assert { type: 'json'}

const metadata = {
	version: pkg.version
}
fs.writeFile('./src/metadata.json', JSON.stringify(metadata), 'utf8', function(err) {
	if (err) return console.log(err);
})
