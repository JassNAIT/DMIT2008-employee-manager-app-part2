// productionUrl = 'https://jkaur79-employee-manager-app2.herokuapp.com/'
// developmentUrl = 'http://localhost:5000/

const api = {
    getAllDepartments: 'https://jkaur79-employee-manager-app2.herokuapp.com/api/departments/',
    // Snippet #5
    updateEmployee: `https://jkaur79-employee-manager-app2.herokuapp.com/api/departments/employee/update`,
    getDepartment: (name)=>{
        return `https://jkaur79-employee-manager-app2.herokuapp.com/api/departments/name/${name}`
    },
    deleteEmployee: (id)=>{
        return `https://jkaur79-employee-manager-app2.herokuapp.com/api/departments/employee/id/${id}` 
    }
}

export default api