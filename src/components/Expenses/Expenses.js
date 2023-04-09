import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
let Expenses = (data) => {
    return (
        <Card className={'expenses'}>
            <ExpenseItem
                title={data.expenses[0].title}
                amount={data.expenses[0].amount}
                date={data.expenses[0].date}
            > </ExpenseItem>
            <ExpenseItem
                title={data.expenses[1].title}
                amount={data.expenses[1].amount}
                date={data.expenses[1].date}
            > </ExpenseItem>
            <ExpenseItem
                title={data.expenses[2].title}
                amount={data.expenses[2].amount}
                date={data.expenses[2].date}
            > </ExpenseItem>
            <ExpenseItem
                title={data.expenses[3].title}
                amount={data.expenses[3].amount}
                date={data.expenses[3].date}
            > </ExpenseItem>
        </Card>
    )
}

export default Expenses