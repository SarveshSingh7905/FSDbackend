const fs = require('fs');

const write=()=>{
    const data="I am a new file"
    fs.writeFile("./data.txt",data,(err)=>{
        if(err)
            console.log(" error writing filr".err);
        else
        console.log(" file written succesfully");
    })
}
write(" I am a new data ");