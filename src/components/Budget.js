import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        if (newBudget > 20000){
            alert("The Company's Budget cannot exceed ",{currency}, "20,000, the company is not that big.");
            setNewBudget(budget);
            return;
        }
        else if (newBudget < totalExpenses){
            alert("Budget cannot go below what is already spent.");
            setNewBudget(totalExpenses);
            return;
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
