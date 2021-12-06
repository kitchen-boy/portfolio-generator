const fs = require('fs');
const generatePage = require('./src/page-template.js');
//profileDataArgs array
const profileDataArgs = process.argv.slice(2);
//console.log(profileDataArgs);
//use the array index with the following expressions
const [name, github] = profileDataArgs;

/* 9.2.3 - commented all code that was done in previous lesson 9.1
const printProfileData = (profileDataArr) => {
    //This...
    for (let i = 0; i < profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    }
    console.log ('=================');

    // Is the same as this...
    profileDataArr.forEach(profileItem => console.log(profileItem));
};
printProfileData(profileDataArgs);*/

fs.writeFile('./index.html', generatePage(name, github), err => {
    /*In the callback function block, a conditional statement checks 
    for the err being returned by the callback function. 
    If err exists, an error message is displayed, using the following statement:*/
    if (err) throw new Error (err);
    
  
    console.log('Portfolio complete! Check out index.html to see the output!');
  });