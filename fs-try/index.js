const fs = require('fs');
fs.mkdir('content',(err)=>{
    if(err) return console.log('WRONG');
    console.log('content folder created')
})
fs.writeFile('randomText.txt','new line',(err)=>{
    if(err) return console.log('cannot create');
    console.log('randomText.txt created')
})
fs.readFile('randomText.txt','utf-8',(err,info)=>{
    if(err) return console.log('File Not Right');
    fs.writeFile('./content/verbage.txt',info,(err)=>{
        if(err) return console.log('NOT WRITTEN');
        console.log('verbage.txt created')
    })
})
setTimeout(()=>{
    fs.rmdir('content',{ recursive: true },(err)=>{
        if(err) return console.log('CANNOT DELETE DIRECTORY');
        console.log('DELETED')
    })
},7000)