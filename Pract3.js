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
const fs = require("fs");
const zlib = require("zlib");
const path = require("path");

const filePath = path.join(__dirname, "logfile.txt");

// ✅ Ensure file exists BEFORE anything
if (!fs.existsSync(filePath)) {
  console.error("❌ logfile.txt NOT FOUND. Please create it first.");
  process.exit(1);
}

// 1. Read stream
const readStream = fs.createReadStream(filePath, "utf8");

readStream.on("data", (chunk) => {
  console.log("Reading chunk:");
  console.log(chunk);
});

readStream.on("error", (err) => {
  console.error("Read error:", err.message);
});

// 2. Write stream
const writeStream = fs.createWriteStream("output.txt");

// 3. Copy using pipe
readStream.pipe(writeStream);

writeStream.on("finish", () => {
  console.log("✅ Data copied successfully");

  // 4. Compress ONLY AFTER copy finishes
  const gzip = fs.createReadStream(filePath)
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream("logfile.txt.gz"));

  gzip.on("finish", () => {
    console.log("✅ File compressed successfully");

    // 5. Decompress ONLY AFTER compression finishes
    const gunzip = fs.createReadStream("logfile.txt.gz")
      .pipe(zlib.createGunzip())
      .pipe(fs.createWriteStream("logfile_uncompressed.txt"));

    gunzip.on("finish", () => {
      console.log("✅ File decompressed successfully");
    });

    gunzip.on("error", console.error);
  });

  gzip.on("error", console.error);
});

writeStream.on("error", (err) => {
  console.error("Write error:", err.message);
});
