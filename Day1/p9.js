const fs = require('fs');

fs.mkdir('mydr', (err) => {
    if (err) throw err;
    console.log("Directory created");
});
