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
    return (
        <div className={"new-expense"}>
            {!showExpenseForm &&  <ExpenseButton showForm={showExpenseFormHandler}/>}
            {showExpenseForm &&  <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} hideForm={hideExpenseFormHandler}/>}
        </div>
    )
}
export default NewExpense