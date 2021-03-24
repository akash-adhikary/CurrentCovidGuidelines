const express= require('express');
var app = express();


function serve(htmlFile,route){
    
    app.get(route, function(req, res) {
        res.sendFile(htmlFile, {root: __dirname })
    });
}

serve('scrap.html','/source');
serve('scrap3.html','/');


app.listen(300);
console.log('Express app started on port ' + 3000);