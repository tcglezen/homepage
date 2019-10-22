const http = require('http');
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 9001;
const fs = require('fs');

//This is new stuff
const url = require('url');
const events = require('events');
const eventEmitter = new events.EventEmitter();
const formidable = require('formidable');
const nodemailer = require('nodemailer');

app.use(express.static(__dirname));
