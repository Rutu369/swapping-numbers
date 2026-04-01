Program 2: 

Employee Record Management System 

Scenario 

A company wants to store and manage employee records in a file using Node.js. 

Task 

Write a Node.js program that performs the following file system operations: 

1. Create a file employee.txt and store employee details. 

2. Write employee data into the file. 

3. Append new employee records to the same file. 

4. Read the file synchronously and display the employee data. 

5. Read the file asynchronously and display the employee data. 

6. Open the file and display a message when it opens successfully. 

7. Delete the file after displaying the records. 

// Import File System module 

const fs = require("fs"); 

// Employee data 

const employeeData = "Employee ID: 101\nName: \nDepartment: IT\n"; 

const newEmployee = "Employee ID: 102\nName: \nDepartment: HR\n"; 

// 1. Create file and write employee data 

fs.writeFileSync("employee.txt", employeeData); 

console.log("File created and employee data written"); 

// 2. Append new employee record 

fs.appendFileSync("employee.txt", newEmployee); 

console.log("New employee record appended"); 

// 3. Read file synchronously

const dataSync = fs.readFileSync("employee.txt", "utf8"); 

console.log("\nSynchronous Read:"); 

console.log(dataSync); 

// 4. Read file asynchronously 

fs.readFile("employee.txt", "utf8", (err, data) => { 

 if (err) { 

 console.log(err); 

 return; 

 } 

 console.log("\nAsynchronous Read:"); 

 console.log(data); 

 // 5. Open the file 

 fs.open("employee.txt", "r", (err, fd) => { 

 if (err) { 

 console.log(err); 

 return; 

 } 

 console.log("\nFile opened successfully"); 

 // 6. Delete the file 

 fs.unlink("employee.txt", (err) => { 

 if (err) { 

 console.log(err); 

 return; 

 }
   console.log("File deleted successfully"); 

 }); 

 }); 

});
