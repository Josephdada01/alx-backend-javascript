export default function updateStudentGradeByCity(students, city, newGrades) {
// Filter students based on the specified city
  const filteredStudents = students.filter((student) => student.location === city);

  // Map over the filtered students to update their grade
  const updatedStudents = filteredStudents.map((student) => {
    // Find the grade for the current student in newGrades array
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);

    // If grade is found, assign it to the student, otherwise set grade as "N/A"
    const grade = gradeObj ? gradeObj.grade : 'N/A';

    // Return a new student object with the updated grade
    return { ...student, grade };
  });

  return updatedStudents;
}
