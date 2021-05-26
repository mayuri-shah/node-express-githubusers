const axios = require('axios');
const process = require('process');
const fs = require("fs");
const lineReader = require('line-reader');
const url = require('url')
var validUrl = require('valid-url');

filename = process.argv[2];

lineReader.eachLine(filename, function(line) {
        hostname = url.parse(line).hostname;
        
        if (validUrl.isUri(line)){
            console.log('Looks like an URI');
            writeHTML(line,hostname)
        } 
        else {
            console.log('Not a URI');
        }
    });

async function writeHTML(url,hostname){
    try{
        const res = await axios.get(url);
        writeHTMLText(hostname,res.data)    
    }
    catch(e){
        console.log('address is not defined')
    }   
}
function writeHTMLText(hostname,resText){
    fs.writeFile(hostname,resText,'utf8',function(err){
        if(err){
            console.log(err);
        }
        console.log(`writing to ${hostname}`);

    })

}
