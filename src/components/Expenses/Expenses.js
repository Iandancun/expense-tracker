import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, {useState} from "react";

let Expenses = (data) => {

    const [filteredYear, setFilteredYear] = useState(2020)
    const expenseFilterHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    return (
        <Card className={'expenses'}>
            <ExpensesFilter selected={filteredYear} onExpenseFilter={expenseFilterHandler}></ExpensesFilter>
            {data.expenses.map((item) => (
                <ExpenseItem
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}/>
            ))}

        </Card>
    )
}

export default Expenses