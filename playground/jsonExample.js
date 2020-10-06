const fs = require('fs');

const dataBuffer = fs.readFileSync('jsonExample.json');
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

user.name = "Kasey"
user.age = 24;

const userJSON = JSON.stringify(user);
fs.writeFileSync('jsonExample.json', userJSON);