// fetch("http://localhost:3001/employees?department=Engineering")
// .then((response)=> response.json())
// .then((data)=>{
//     console.log("Employees:", data);
// })
// .catch((error)=>{
//     console.log("Error", error);
    
// })

async function getEmployees(){
    try{
        // Send API request
        const response = await fetch("http://localhost:3001/employees");

        // Check HTTP response
        if(!response.ok){
            // creates an error
            throw new Error("Failed to fetch Employees");
        }
        // Convert response into JavaScript data
        const data = await response.json();
        console.log("Employees:", data);
        
    }
    // Both error and err are valid variable names.
    catch(error){
        // Handle error
        console.log("Error:", error);
        
    }
}
getEmployees();