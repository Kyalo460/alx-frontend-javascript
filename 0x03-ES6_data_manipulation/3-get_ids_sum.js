export default function getStudentIdsSum(students) {
  const sum = students.reduce((accumulator, currentvalue) => accumulator + currentvalue.id, 0);
  return sum;
}
