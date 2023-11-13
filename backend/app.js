// require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
// require("./db");
const multer = require('multer')

const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
const bodyParser = require('body-parser');
const path = require('path')
const fs = require('fs')
const { v4: uuidv4 } = require('uuid')
const { response } = require('express')
const { stringify } = require('querystring')
const { resolve } = require('path')
const { rejects } = require('assert')
const { resolveSoa } = require('dns')
const { resolve4 } = require('dns')
const { resolve6 } = require('dns')
const { resolveCname } = require('dns')
const { resolveNs } = require('dns')
const { resolveTxt } = require('dns')
const { resolveMx } = require('dns')
const { resolveSrv } = require('dns')
const { resolvePtr } = require('dns')
const { resolveNaptr } = require('dns')
const { resolveCaa } = require('dns')
const { resolveAny } = require('dns')
const { resolveSoa } = require('dns')

app.use(express.json())
app.use(bodyParser.json());

app.use(cors()) 
