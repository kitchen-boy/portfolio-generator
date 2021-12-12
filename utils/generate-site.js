const fs = require('fs');
// writing files
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method.
            resolve({
                ok: true, 
                message: 'File created!'
            });
        });
    });
};

//copying file
const copyFile = () => {
    return new Promise ((resolve, reject) => {
        // corrected error - copying css style sheet from original to dist file
        fs.copyFile('./src/style.css', './dist.style.css', err => {
            if (err) {
                reject (err);
                return;
            }
            resolve({
                ok: true, 
                message: 'Success! Style sheet created!'
            });
        });
    });
};

/* Export this object with the two functions, used as methods,
writeFile and copyFile, using module.exports*/
/* The name of the function as both the property (i.e. the method) name 
and the value of the method.*/
module.exports = { writeFile, copyFile };