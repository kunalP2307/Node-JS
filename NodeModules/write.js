const fs = require("fs");
const path = require("path");

fs.writeFile(path.join("write.txt"), "writing file", (err) => {
    console.log("Writing file sucessful")
    if(err){
        console.log(err.name)
    }
});


console.log(__dirname)
console.log(__filename)
