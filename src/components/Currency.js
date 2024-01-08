import React, {useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const [newCurrency, setNewCurrency] = useState('');
    const handleCurrencyChange = (event) => {
        setNewCurrency(event.target.value);
    }
    

    return (
        <div className="custom-select" style={{ marginLeft: '2rem' }} color='green'>
        <select className="custom-select" id="inputCurrencySelect01" onChange= {handleCurrencyChange}>
            <option defaultValue>Currency</option>
            <option value="$ Dollar" name="dollar"> $ Dollar</option>
            <option value="£ Pound" name="pound"> £ Pound</option>
            <option value="€ Euro" name="euro"> € Euro</option>
            <option value="╣ Rupees" name="rupees"> ╣ Rupees</option> 
        </select>
        </div>
    );
};

export default Currency;