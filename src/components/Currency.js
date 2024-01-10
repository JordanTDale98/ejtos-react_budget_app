import React, {useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const {currency, dispatch} = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);

    const handleCurrencyChange = () => {
/*        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency
        });
        */
        if (newCurrency === "$") {
            dispatch({
                type: "CHG_CURRENCY",
                payload: currency
            });
        }
        if (newCurrency === "€") {
            dispatch({
                type: "CHG_CURRENCY",
                payload: currency
            });
        }
        if (newCurrency === "╣") {
            dispatch({
                type: "CHG_CURRENCY",
                payload: currency
            });
        }
        else {
            dispatch({
                type: "CHG_CURRENCY",
                payload: currency
            });
        }
 
    }
    

    return (
        <div className="custom-select" style={{ marginLeft: '2rem'}} >
        <select className="custom-select" id="inputCurrencySelect01" value = {currency} onChange={handleCurrencyChange}>
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