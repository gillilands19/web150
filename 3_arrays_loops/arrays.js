var grades = "jim|25, sue|32, mary|34, ann|22, ted|28, frank|15, lisa|19, mike|30, ahn|26, vishaya|27";

var grades = grades.replace(/\|/g, ' - ');
 
var students = grades.split(/,\s/g);

var formattedStudents = [];

for (var i = 0; i < students.length; i++) {
    var student = students[i];
    var firstUpper = student.charAt(0).toUpperCase();
    var studentPlusUpper = firstUpper + student.replace(/[a-z]/, '');
    formattedStudents.push('<li>' + studentPlusUpper);
}

formattedStudents.sort();

var highScore = formattedStudents[5];
var lowScore = formattedStudents[2];
var averageScore = (26+22+15+25+19+34+30+32+28+27)/10;