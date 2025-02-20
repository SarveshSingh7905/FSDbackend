const fs = require('fs');

fs.mkdir('mydr', (err) => {
    if (err) throw err;
    else 
    console.log("Directory created")
})
