const fs = require('fs');

const data = "I am a new file";
fs.writeFileSync("./data.txt", data);
