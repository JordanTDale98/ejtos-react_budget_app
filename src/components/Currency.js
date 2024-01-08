import React, {useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency  } = useContext(AppContext);

    const [newCurrency, setNewCurrency] = useState('');
    const [action, setAction] = useState('');

    dispatch ({
        type: CHG_CURRENCY,
        payload: currency,
    });

    return (
        <div className="custom-select" style={{ marginLeft: '2rem' }} color='green'>
        <select className="custom-select" id="inputCurrencySelect01" onChange={(event) => setNewCurrency(event.target.value)}>
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