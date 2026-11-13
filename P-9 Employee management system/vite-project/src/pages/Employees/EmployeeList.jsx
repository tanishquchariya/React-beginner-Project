import { useEffect, useState } from "react";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    async function getEmployee() {
      try {
        const response = await fetch("http://localhost:3001/employees");
        if (!response.ok) {
          throw new Error("Failed to Fetch Data");
        }
        
        const data = await response.json();
        console.log("Employee:", data);
        setEmployees(data);
      } catch (error) {
        console.log("Error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    getEmployee();
  }, []);

    // Loading condition
  if (loading) {
    return <h2>Loading employees...</h2>;
  }

  // Error condition
  if (error) {
    return <h2>{error}</h2>;
  }
  return (
    <div>
      <h1>Employees</h1>
      {employees.map((employee) => (
        <div key={employee.id}>
          <h3>{employee.name}</h3>
          <p>{employee.email}</p>
          <p>{employee.department}</p>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;
