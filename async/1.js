var fs = require("fs")
var express = require("express")
var http = require("http")
var async = require("async")


async.waterfall([
    (cb) => {
        fs.readFile(process.argv[2], (err, data) => {
            if (err) return cb(err)
            cb(null, data.toString())
        })
    },
    (data, cb) => {
        var body = ""
        http.get(data, (res) => {
            res.on("data", (chunk) => {
                body += chunk.toString()
            })
            res.on("end", () => {
                cb(null, body)
            })
        }).on("error", (err) => {
            cb(err)
        })
    }
], (err, result) => {
    if (err) return console.error(err);
    console.log(result)
})