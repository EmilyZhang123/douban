/**
 * Created by emily on 2017/6/27.
 */
//抓取网页

var express = require('express');
var douban = express();
var request = require('request');
var cheerio = require('cheerio');

douban.get('/',function (req,res) {
    request ('https://movie.douban.com/',function (error, response, body) {
        if (!error && response.statusCode == 200) {
            $ = cheerio .load(body);
            var arg = $('.ui-slide-item');
            console.log(arg);
            var name = [];
            var nameClass = [];
            for(i=0;i<arg.length;i++){
                 name.push(arg[i].attribs);
            }
            for(var j in name){
                nameClass.push(name[j]["data-title"]);
            }
            nameClass.forEach(function (x,index) {
                if(index<4){
                    console.log(x);
                }
            });
            res.json({
                cat: name.length
            });
        }
    })
});

var server = douban.listen(3000,function () {
    console.log('listening at 3000');
});
