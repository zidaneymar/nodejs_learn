var express = require("express")
var fs = require("fs")

var app = express()

var path_to = process.argv[3]

app.get("/books", function (req, res) {
	console.log(path_to)
	fs.readFile(path_to, (err, data) => {
		if (err) throw err
		res.json(JSON.parse(data.toString()))
	})
})



app.listen(process.argv[2])


