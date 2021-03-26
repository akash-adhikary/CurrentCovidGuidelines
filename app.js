
const express= require('express');
var app = express();
const siteUrl ='https://www.goindigo.in/information/state-regulations.html';
//const siteUrl ='https://en.wikipedia.org/wiki/Nuzha';
var fetchNsave = require('./fetchNsave.js');
const fetchnsave= new fetchNsave();
const cheerio = require('cheerio');
const axios = require("axios");

var Regex = require("regex");
var y=[];
var z='';
var statewiseguidelines={};
const fetchData = async () => {
    const result = await axios.get(siteUrl);
    let x = result.data
    fetchnsave.SaveHtml("./scrap.html",x)
    //console.log(result.data)
    //return cheerio.load(result.data);
    const $ = cheerio.load(x);
    
    $('.accordionpanel.section').each(function( index ) {
      //console.log( index + ": " + $( this ).text() );
      y[index]=$( this ).text();
      var lines=y[index].trim().split("\n");
      var state_name=lines.splice(0,1).join();
      var guidelines=lines.join("\n").trim();
      //var guidelines=a.join("\n").trim();
      statewiseguidelines[state_name]= guidelines;
     
      z=z+' '+$( this ).html();
    });
    //console.log(statewiseguidelines);
   //console.log(statewiseguidelines["Assam"]);
    // var a=y[2].trim().split("\n");
    // var state=a.splice(0,1);
    // var statename=state.join();
    fetchnsave.SaveHtml("./scrap3.html",z);

    };

var regex = new Regex(/(a|b)*abb/);
console.log(regex.test("aabb"));      
fetchData();

function serve(htmlFile,route){
    
    app.get(route, function(req, res) {
        res.sendFile(htmlFile, {root: __dirname })
    });
}

serve('scrap.html','/source');
serve('scrap3.html','/');


var port = process.env.PORT || 3000;
var server = app.listen(port);
console.log('Express app started on port ' + port);
