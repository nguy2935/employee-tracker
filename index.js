const chooseRequest = () -> {
    inquirer.prompt([
        {
            type: "list",
            name: "request",
            message: "What would you like to do?",
            choices: "Add a Department",
                    "Add an Employee",
                    "Add a Role",
                    "Update Employees Role",
                    "View All Departments",
                    "View all Employees",
                    "View All Roles",
                    loop: false,
        },
    ])
}