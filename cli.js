#!/usr/bin/env node

var path = require('path');

// Grab the config file
var configPath = process.argv[2] || './config.json';
var config;

try {
  config = require(path.join(process.cwd(), configPath));
} catch (e) {
  console.error("No config file found.");
  process.exit(1);
}

require('./server')(config);

