export default function createIteratorObject(report) {
  const array = [];
  const employees = report.allEmployees;
  const keys = Object.keys(employees);

  for (const value of keys) {
    array.push(...employees[value]);
  }

  return array;
}
