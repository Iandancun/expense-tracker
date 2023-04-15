import React from "react";
import './ExpenseForm.css'

let ExpenseButton = (props) => {
    return (
        <div className={"new-expense__button"}>
            <button type={"button"} onClick={props.showForm}>Add New Expense</button>
        </div>
    )
}

export default ExpenseButton