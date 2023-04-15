import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

let Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState(2020)
    const expenseFilterHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }
    const filteredExpenses = props.items.filter((item) => item.date.getFullYear().toString() === filteredYear)

    return (
        <Card className={'expenses'}>
            <ExpensesFilter selected={filteredYear} onExpenseFilter={expenseFilterHandler}></ExpensesFilter>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses} filteredYear={filteredYear}/>
        </Card>
    )
}

export default Expenses