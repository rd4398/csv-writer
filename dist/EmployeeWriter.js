"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const employeeWriter = new index_1.CSVWriter(['id', 'name', 'role', 'salary']);
employeeWriter.addRows([
    { id: 1, name: 'jay', salary: 50000, role: 'media manager' },
    { id: 2, name: 'sam', salary: 50000, role: 'web developer' },
    { id: 3, name: 'tom', salary: 80000, role: 'IT engineer' }
]);
employeeWriter.save('data/employees.csv');
