export default function updateStudentGradeByCity(students, city, newGrades) {
  const filteredStudents = students.filter((student) => student.location === city);

  const gradedStudents = filteredStudents.map((student) => {
    const studentGrade = newGrades.filter((grade) => grade.studentId === student.id);
    const finalizedSudent = student;
    if (studentGrade.length === 0) {
      finalizedSudent.grade = 'N/A';
    } else {
      finalizedSudent.grade = studentGrade[0].grade;
    }
    return finalizedSudent;
  });

  return gradedStudents;
}
