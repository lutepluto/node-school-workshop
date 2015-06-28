'use strict'

var websocket = require('websocket-stream')

websocket('ws://localhost:8099').end('hello\n')
