import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
import ExpenseButton from "./ExpenseButton";
import React, {useState} from "react";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }
    const [showExpenseForm, setShowExpenseForm] = useState(false)

    const hideExpenseFormHandler = () => {
        setShowExpenseForm(false)
    }
    const showExpenseFormHandler = () => {
        setShowExpenseForm(true)
    }
    let expenseForm;
    let expenseButton;
    if (showExpenseForm)
        expenseForm = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} hideForm={hideExpenseFormHandler}/>
    if (!showExpenseForm)
        expenseButton = <ExpenseButton showForm={showExpenseFormHandler}/>
    return (
        <div className={"new-expense"}>
            {expenseButton}
            {expenseForm}
        </div>
    )
}
export default NewExpense