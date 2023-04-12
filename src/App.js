import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
    {
        id: 'e1',
        title: 'Macbook Pro',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
    {
        id: 'e3',
        title: 'Personal Car Cleaner',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Metal)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];
let App = () => {


    const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
    const addExpenseDataHandler = (expense) => {
        setExpenses((prevExpenses)=>{
            return [expense, ...prevExpenses]
        })


    }

    return (
        <div>
            <NewExpense onAddExpense={addExpenseDataHandler}/>
            <Expenses expenses={expenses}></Expenses>
        </div>
    );
}
export default App;
