import React from "react";
import './ExpenseForm.css'

let ExpenseButton = (props) => {
    const newExpenseButtonHandler = (event) => {
        props.showForm()
    }
    return (
        <div className={"new-expense__button"}>
            <button type={"button"} onClick={newExpenseButtonHandler}>Add New Expense</button>
        </div>
    )
}

export default ExpenseButton