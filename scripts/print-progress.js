const fs = require('fs');
const decompressFromBase64 = require('lz-string').decompressFromBase64;

fs.readFile(__dirname + '/../progress.txt', function (err, data) {
    if (err) {
        throw err;
    }
    let jsonString = decompressFromBase64(data.toString());
    let parsedData = JSON.parse(jsonString);
    console.log(parsedData);
    const characterData = JSON.parse(parsedData.characterData);
    console.log(characterData);
});