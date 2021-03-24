const fs = require('fs');
const cheerio = require('cheerio');
const axios = require("axios");

class fetchNsave
{   
    // constructor(data) {
    //     this.data = data;
    // }

    SaveHtml(dir,data){
        fs.writeFile(dir, data, function(err) {
            if(err) {
                return console.log(err);
            }
            //console.log(data);
        }); 
    };
    // ReadHtml(filepath)
    // {
    //     fs.readFile(filepath, 'utf8' , (err, x) => {
    //         if (err) {
    //           return console.error(err)
    //           
    //         }
    // }
    
    
       
}

module.exports = fetchNsave;