var fs = require("fs")
var express = require("express")
var http = require("http")
var async = require("async")

async.series({
    requestOne: (cb) => {
        var body = ""
        http.get(process.argv[2], (res) => {
            
            res.on("data", (chunk) => {
                body += chunk.toString()
            })
            res.on("end", () => {
                cb(null, body)
            }).on("error", (err) => {
                cb(err)
            })
        })
    },
    requestTwo: (cb) => {
        var body = ""
        http.get(process.argv[3], (res) => {
            
            res.on("data", (chunk) => {
                body += chunk.toString()
            })
            res.on("end", () => {
                cb(null, body)
            }).on("error", (err) => {
                cb(err)
            })
        })
    }
}, (err, result) => {
    if (err) return console.error(err)
    console.log(result)
})