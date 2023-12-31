const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 8000;
const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(`mongodb+srv://wiacix:kamil123@cluster0.4j6d7pq.mongodb.net/`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to mongoDB")
}).catch((error) => {
    console.log("Error connectiong to mongoDB", error)
});

app.listen(port, () => {
    console.log("Server is running on port", port)
});

const Employee = require("./models/employee")
const Attendance = require("./models/attendance")

app.post("/addEmployee", async (req, res) => {
    try {
        const { employeeName, employeeId, designation, phoneNumber, dateOfBirth, joingDate, activeEmployee, salary, address } = req.body;

        const newEmployee = new Employee({
            employeeName,
            employeeId,
            designation,
            phoneNumber,
            dateOfBirth,
            joingDate,
            activeEmployee,
            salary,
            address,
        });

        await newEmployee.save();

        res.status(201).json({ message: 'Employee saved successfully', employee: newEmployee })

    } catch (error) {
        console.log('Error catching employee', error)
        res.status(500).json({ message: 'Faild to add an employee' })
    }
})


app.get("/employees", async (req, res) => {
    try {
      const employees = await Employee.find();
      res.status(200).json(employees);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve the employees" });
    }
  });