Program 3: 

Large File Processing System 

Scenario 

A media company needs to process large log files efficiently without loading the entire file into 

memory. 

Task 

Write a Node.js program that performs the following stream operations: 

1. Use a readable stream to read data from logfile.txt. 

2. Use a writable stream to write the data into output.txt. 

3. Use piping to copy data from logfile.txt to output.txt. 

4. Use stream chaining to compress the file into logfile.txt.gz. 

5. Use a decompress stream to unzip the compressed file. 

Code: 

// Import required modules 

const fs = require("fs"); 

const zlib = require("zlib"); 

// 1. Create a readable stream to read data from logfile.txt 

const readStream = fs.createReadStream("logfile.txt", "utf8"); 

// Display data chunks while reading 

readStream.on("data", (chunk) => { 

 console.log("Reading chunk:"); 

 console.log(chunk); 

}); 

// 2. Create a writable stream to write data into output.txt 

const writeStream = fs.createWriteStream("output.txt");
// 3. Use piping to copy data from logfile.txt to output.txt 

readStream.pipe(writeStream); 

console.log("Data is being copied using pipe..."); 

// 4. Use stream chaining to compress the file into logfile.txt.gz 

fs.createReadStream("logfile.txt") 

 .pipe(zlib.createGzip()) 

 .pipe(fs.createWriteStream("logfile.txt.gz")); 

console.log("File compressed successfully"); 

// 5. Decompress the compressed file 

fs.createReadStream("logfile.txt.gz") 

 .pipe(zlib.createGunzip()) 

 .pipe(fs.createWriteStream("logfile_uncompressed.txt")); 

console.log("File decompressed successfully");
