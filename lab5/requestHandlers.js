var fs = require("fs");
var querystring = require("querystring");

function start(response, postData) 
{
    console.log("Request handler 'start' was called.");
    var body = fs.readFileSync('lab5.html');
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}
function hedgehog(response, postData) 
{
    console.log("Request handler 'hedgehog' was called.");
    printfunc(response, postData);
}
function echidna(response, postData) 
{
    console.log("Request handler 'echidna' was called.");
    printfunc(response, postData);
}
function raccoon(response, postData) 
{
    console.log("Request handler 'raccoon' was called.");
    printfunc(response, postData);
}
function printfunc(response, postData) 
{
  var data = querystring.parse(postData).text.split(' ')[1];
  var data2 = querystring.parse(postData).text.split(' ')[0];
  

  response.writeHead(200, {'Content-Type': 'image/jpeg'});  

  if (data != null) {
    var name = data2 + data;
    var imgname =('images/'+ name + '.jpg');
    var image = fs.readFileSync(imgname);
    response.write(image);
    response.end();
  } else {
    var name = data2 + Math.floor(Math.random() * 10);
    var imgname =('images/'+ name + '.jpg');
    var image = fs.readFileSync(imgname);
    response.write(image);
    response.end();
  }

}
exports.start = start;
exports.hedgehog = hedgehog; 
exports.echidna = echidna; 
exports.raccoon = raccoon; 