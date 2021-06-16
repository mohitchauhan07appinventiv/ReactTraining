const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');

request('https://www.imdb.com/',cb);
function cb(error, response, html){
    if(error){
        console.log('error', error);
    }else{
        handleHtml(html);
    }
}
var dataObject = [];
handleHtml();

function handleHtml(html){
    let selTool = cheerio.load(html);
    let image = selTool('img[class~=ipc-image]');
    let arr=[];
    for(var i = 0 ; i < 3; i++){
        arr[i] = image[i].attribs.src;
        var obj={
            'src':arr[i],
        }
        dataObject.push(obj);
        // document.write(dataObject);
    }
    console.log(dataObject);
    
    // console.log(image[0].attribs.src);
}
export default dataObject;