export default function createReportObject(employeesList) {
  const object = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments() {
      return Object.keys(employeesList).length;
    },
  };

  return object;
}
