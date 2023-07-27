const fs = require("fs");
const path = require("path");
const coffee = require("coffeescript");
const express = require("express");

function fromDir(startPath, filter, callback){
    if (!fs.existsSync(startPath)){  // Make sure it exists
        console.log("no dir ", startPath);
        return;
    }

    var files = fs.readdirSync(startPath);  // Read it, now.
    for(var i = 0; i < files.length; i++){
        var filename = path.join(startPath, files[i]);
        var stat = fs.lstatSync(filename);
        // resolve it's path and see what kind of file it is.
        if (stat.isDirectory()){  // If it's a directory, recurse
            fromDir(filename, filter, callback); //recurse
        }
        else if (filter.test(filename)) callback(filename);
        // Otherwise, run the callback.
    }
}

fromDir("./index", /\.coffee$/, function(filename){
  // Compile every coffee file in the index folder to a .js file, in the same nested folder. 
  fs.readFile(filename, 'utf-8', function(err, data){
    if (err) {
      console.log(err);
      return;
    }

    var newName = filename.split(".").slice(0, -1).join(".") + ".js";

    var compiled = "// Compiled from Coffeescript (" + filename + ")\n" +
    coffee.compile(data);

    fs.writeFile(newName, compiled, 'utf-8', (err) => {if (err) console.log(err)});
  });
});

const app = express();
app.use('/', express.static(path.join(__dirname, "./index")));
app.listen(3000);