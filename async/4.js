var fs = require("fs")
var express = require("express")
var http = require("http")
var async = require("async")

var url = process.argv[2] + ":" + process.argv[3] + "/users/create"
var url2 = process.argv[2] + ":" + process.argv[3] + "/users"




/*async.times(5, (n, next) => {
    console.log(n)
    next(null)
}, (err, result) => {
    if (err) console.error(err)
    
})*/

async.series([
    async.times(5, (n, cb))
    }, (err, results) => {

    }),
    (cb) => {
        http.get(url2, (res) => {
            var body = ""
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
]



, (err, result) => {

})