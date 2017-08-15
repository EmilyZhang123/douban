/**
 * Created by emily on 2017/6/28.
 */
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
            // console.log(body);
            // console.log($('.ui-slide-item').parent.attributes);
            var arg = $('.ui-slide-item');
            var name = [];
            var nameClass = [];
            // console.log(arg);
            for(i=0;i<arg.length;i++){
                // console.log(arg[i].attribs)
                name.push(arg[i].attribs);
            }
            // console.log(name);
            for(var j in name){
                nameClass.push(name[j]["data-title"]);
            }
            console.log("***********************");
            // console.log(nameClass);
            nameClass.forEach(function (x,index) {
                if(index<4){
                    console.log(x);
                }
            });
            res.json({

            });
        }
    })
});


var server = douban.listen(3000,function () {
    console.log('listening at 3000');
});
