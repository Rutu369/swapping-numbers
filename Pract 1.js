1) Implement Student Course Registration with the following details using Node.js 

•Create a file for all the courses with course name, course code, LTP model and 

credits. 

•Display the file content on the web browser using the HTTP module. 

const http = require('http'); 

const fs = require('fs'); 

var course_list = [ 

{ 'si_no': 1, 'course_code': '23EBCC202', 'course_name': 'Java', 'ltp_model': '4-0-0', 'credits': 4 

}, 

{ 'si_no': 2, 'course_code': '24EBCC201', 'course_name': 'Full Stack Web Development with 

MERN Lab', 'ltp_model': '0-0-2', 'credits': 2 }, 

{ 'si_no': 3, 'course_code': '22EBCP102', 'course_name': 'Software Testing', 'ltp_model': '3-0-

0', 'credits': 3 }, 

{ 'si_no': 4, 'course_code': '23EBCC201', 'course_name': 'Computer Networks', 'ltp_model': 

'4-0-0', 'credits': 4 }, 

{ 'si_no': 5, 'course_code': '22EBCP201', 'course_name': 'Machine Learning', 'ltp_model': '4-

0-0', 'credits': 4}, 

{ 'si_no': 6, 'course_code': '23EBCC202', 'course_name': 'Java Lab', 'ltp_model': '0-0-1.5', 

'credits': 1.5 } 

]; 

var file_name = 'course_info.txt'; 

if (fs.existsSync(file_name)) { 

fs.unlinkSync(file_name); 

  }
fs.writeFileSync(file_name, ''); 

for (var course_element = 0; course_element < course_list.length; course_element++) { 

let si_no = course_list[course_element]['si_no'] + '\t| '; 

let course_code = course_list[course_element]['course_code'] + '\t| '; 

let course_name = course_list[course_element]['course_name'] + '\t| '; 

let ltp_model = course_list[course_element]['ltp_model'] + '\t| '; 

let credits = course_list[course_element]['credits'] + '\t| '; 

var course_details = si_no + course_code + course_name + ltp_model + credits + '\n'; 

fs.appendFileSync(file_name, course_details); 

} 

http.createServer((request, response) => { 

response.writeHead(200, { 'Content-Type': 'text/html' }); 

response.write('<h1 style="text-align:center">Course Information</h1>'); 

let si_header = '<table border="1" style="text-align:center"><tr><th>SI No</th><th>Course 

Code</th><th>Course Name</th><th>LTP Model</th><th>Credits</th></tr>'; 

let table_content = ''; 

course_list.forEach((course) => { 

table_content += '<tr><td>' + course.si_no + '</td><td>' + course.course_code + '</td><td>' 

+ course.course_name + '</td><td>' + course.ltp_model + '</td><td>' + course.credits + 

'</td></tr>';
  }); 

response.write(si_header + table_content + '</table>'); 

response.end(); 

}).listen(2001); 

console.log("Server started on port 2001");
