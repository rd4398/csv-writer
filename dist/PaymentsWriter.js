"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const paymentWriter = new index_1.CSVWriter(['id', 'amount', 'to', 'notes']);
paymentWriter.addRows([
    { id: 1, amount: 50, to: 'sam', notes: 'for design work' },
    { id: 2, amount: 100, to: 'rohan', notes: 'for diagrams' },
    { id: 3, amount: 25, to: 'tom', notes: 'clearing a debt' },
]);
paymentWriter.save('./data/payments.csv');
