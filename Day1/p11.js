const fs = require('fs/promises');

const read = async () => { // Add `async` here

        const data = await fs.readFile('./data.txt', 'utf8');
        console.log(data);
   
};

read();
