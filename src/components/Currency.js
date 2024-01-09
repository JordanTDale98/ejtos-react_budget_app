import React, {useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const {currency, dispatch} = useContext(AppContext);
    const [newCurrency] = useState(currency);
    const handleCurrencyChange = () => {
        if (newCurrency === "$") {
            dispatch({
                type: "CHG_CURRENCY",
                payload: newCurrency
            });
        }
        if (newCurrency === "€") {
        }
        if (newCurrency === "╣") {
        }
        else {
        }
    }
    

    return (
        <div className="custom-select" style={{ marginLeft: '2rem'}} >
        <select className="custom-select" id="inputCurrencySelect01" value = {newCurrency} onChange={handleCurrencyChange}>
            <option defaultValue>Currency</option>
            <option value="$" name="dollar"> $ Dollar</option>
            <option value="£" name="pound"> £ Pound</option>
            <option value="€" name="euro"> € Euro</option>
            <option value="╣" name="rupees"> ╣ Rupees</option> 
        </select>
        </div>
    );
};

export default Currency;