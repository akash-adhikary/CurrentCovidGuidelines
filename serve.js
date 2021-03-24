const fs = require('fs')
const cheerio = require('cheerio');
var fetchNsave = require('./fetchNsave.js');
const fetchnsave= new fetchNsave();

fs.readFile('./scrap.html', 'utf8' , (err, x) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(x)
  const $ = cheerio.load(x);
  var y=[];
  var z='';
  $('.accordionpanel.section').each(function( index ) {
    //console.log( index + ": " + $( this ).text() );
    y[index]=$( this ).html();
    z=z+' '+$( this ).html();
  });
  console.log(z);
  fetchnsave.SaveHtml("./scrap3.html",z);
})



// var x='<ul id="fruits"><li class="apple">Apple1</li><li class="apple"> Mango</li><li class="pear">Pear</li><li class="orange">Orange</li></ul>';
// const $ = cheerio.load(x);

// $( "li" ).each(function( index ) {
//   console.log( index + ": " + $( this ).text() );
// });

//var y=$(".orange,.pear").each();

//console.log($(".pear,.orange").html());
// var y=$(".apple,.apple").text();
// console.log(y);
// fetchnsave.SaveHtml(y);



