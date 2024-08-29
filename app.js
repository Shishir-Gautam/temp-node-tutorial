
/*function pathModule(){
const path = require('path')
console.log(path.sep)

const filepath = path.join('./content/','subfolder','test.txt')
console.log(filepath)
const base= path.basename(filepath)
console.log(base)

const absolute = path.resolve(__dirname,filepath)
console.log(absolute)
}
pathModule(
)*/

/*function readfile(){
const {readFileSync,writeFileSync} = require('fs');
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')
console.log(first)
console.log(second)
writeFileSync('./content/result-sync.txt',
    `Here is the result:${first},${second}`,
    {flag:'a'}
)
}
readfile() 
*/

 // this will create a new file called result-sync.txt in the content folder and


//in app.js 


const {readFile, writeFile} = require('fs');

console.log('starting async file ')
readFile('./content/first.txt','utf8',(err,result) => {
    if(err){
        console.log(err)
        return
        }
    const first = result;
    console.log("middle of the task")
    readFile('./content/second.txt','utf8',(err,result) => {
        if(err){
            console.log(err)
            return
            }
        const second = result;
        writeFile('./content/result-async.txt',
        `Here is the result:${first},${second}`,
   (err,result)=>{
        if(err){
            console.log(err)
            return
            }
            console.log('done with task')
    })
    })

});
 console.log('stating new task')

 const httpServer = require('./http');

// Start the HTTP server (optional, if you want to start it from app.js)

//httpServer();
