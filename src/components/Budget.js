import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseTotal from './components/ExpenseTotal';


const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        if (newBudget > 20000){
            alert("The Company's Budget cannot exceed $20,000, it is not that big.");
            setNewBudget(budget);
            return;
        }
        if (newBudget < ExpenseTotal){
            alert("Budget cannot go below what is already spent.");
            setNewBudget(budget);
            return;
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
