const getEmployerRole = (employeeName, employees) => {
  const rightemployee = employees.find(
    (employee) => employee.name === employeeName
  );
  return rightemployee.role;
};
module.exports = getEmployerRole;
