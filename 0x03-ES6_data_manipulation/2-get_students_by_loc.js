export default function getStudentsByLocation(students, city) {
  const newArray = students.filter((students) => students.location === city);
  return newArray;
}
