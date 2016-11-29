#!/usr/bin/env node

/**
 * @author youmoo
 * @since 2016/11/29
 */
'use strict';

const program = require('commander');

program.version('0.0.1');

const qos = require('qos-node-client').default;
const config = require(process.env.HOME + '/.cos.json');

const client = qos.createClient(config);

['upload', 'rm', 'ls'].map(v => require('./commands/' + v)).forEach(fn => fn(program, client));


program.parse(process.argv);

