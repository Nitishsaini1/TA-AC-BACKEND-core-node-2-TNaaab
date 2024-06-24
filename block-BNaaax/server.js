console.log('__dirname;',__dirname);
console.log('__filename;',__filename);

let path = require('path');
let fullPath = path.join(__dirname, 'server.js');
console.log("full path to server.js from directory ", fullPath);