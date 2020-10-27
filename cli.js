#!/usr/bin/env node

const path = require('path');

// Grab the config file
let configPath = process.argv[2] || path.join(process.cwd(), './config.json');
let config;

try {
    config = require(configPath);
} catch (e) {
    console.error(`Incompatible or nonexistent config file at ${ configPath }`);
    console.error(e);
    process.exit(1);
}

require('./server')(config);