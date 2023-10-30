const express = require('express');
const router = express.Router();
const getConvertLatexToSVG = require("./convert-to-svg.js")

router.route("/:latexEquation", getConvertLatexToSVG)
