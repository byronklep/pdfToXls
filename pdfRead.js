var pdfjsLib = require('pdfjs-dist/es5/build/pdf.js')
var data1 = './data.pdf'

const pdfExport = require('./pdfExport')
pdfExport.GetTextFromPDF(data1).then((data) => console.log(data))
