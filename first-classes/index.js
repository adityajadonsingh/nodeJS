const fs = require("node:fs"); // fs Module allows to work with files and directories, including reading, writing, updating, and deleting files. The module supports both synchronous and asynchronous methods.
// C

//==> Read File

//Async Mode for fs fileRead 

fs.readFile("./sample.txt", (err, data) => {
    if (err) {
        return console.log(err);
    }
    // console.log(data.toString());
});

// If we dont want to use toString() method then we have to add an another parameter like {encoding: "utf-8"}

//Sync Mode for fs fileRead 

try {
    const data = fs.readFileSync("./sample.txt", {encoding: "utf-8"});
    // console.log(data);
}catch(err){
    console.error(err);
}
 
// ---- ---- ---- ---- ---- ---- --- ---- ---- ---- ---- ---- ---- ---- ----- ---- ---- ----- ---- ---- ---- ---- ----

//==> Create File

//Async Mode for fs fileWrite

const str = "Write this content in New File";

fs.writeFile("asyncCreate.txt", str, (err)=>{
    if(err){
        return console.error(err);
    }
});

// If the file is already existed then the above command will overwrite the file

//Sync Mode for fs fileWrite

const strSync = "Write this content in New File";

fs.writeFileSync('syncCreate.txt', strSync);

// ---- ---- ---- ---- ---- ---- --- ---- ---- ---- ---- ---- ---- ---- ----- ---- ---- ----- ---- ---- ---- ---- ----

//==> Update File => This will only append the data at the end of the file & if the file doesn't exist then it will create the file first and then write

const updatedStr = "\nWrite this updated content in New File";

fs.appendFile("asyncCreate.txt", updatedStr, (err)=>{
    if(err){
        return console.error(err);
    }
});

// ---- ---- ---- ---- ---- ---- --- ---- ---- ---- ---- ---- ---- ---- ----- ---- ---- ----- ---- ---- ---- ---- ----

// Modifying the data example

function modifyData(){
    try{
        const fileData = fs.readFileSync("./sample.txt", { encoding: "utf-8" });
        const updatedData = fileData.replace("file", "updated data");
        fs.writeFile("./sample.txt", updatedData, (err)=>{
            if(err) throw console.log(err);

        })
    }catch(err){
        console.error(err);
    }
}
// modifyData();

// ---- ---- ---- ---- ---- ---- --- ---- ---- ---- ---- ---- ---- ---- ----- ---- ---- ----- ---- ---- ---- ---- ----

// Deleting File

fs.unlink("./create.txt", (err) => {
    if(err) throw console.log(err);
});