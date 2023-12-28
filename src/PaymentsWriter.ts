import { CSVWriter } from "./index"

interface Payment {
    id: number
    amount: number
    to: string
    notes: string
}


const paymentWriter = new CSVWriter<Payment>(['id', 'amount', 'to', 'notes'])
paymentWriter.addRows([
    {id: 1, amount: 50, to: 'sam', notes: 'for design work'},
    {id: 2, amount: 100, to: 'rohan', notes: 'for diagrams'},
    {id: 3, amount: 25, to: 'tom', notes: 'clearing a debt'},
])

paymentWriter.save('./data/payments.csv')