var fs = require("fs")
var express = require("express")
var http = require("http")
var async = require("async")

async.each([process.argv[2], process.argv[3]], (item, cb) => {
    http.get(item, (res) => {
        res.on("end", () => {
            cb()
        })
    }).on("error", (err) => {
        cb(err)
    })
}, (err) => {
    if(err) return console.error(err)
})