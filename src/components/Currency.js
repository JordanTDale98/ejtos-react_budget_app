import React, {useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch,currency  } = useContext(AppContext);
    const [action, setAction] = useState('');
    const submitEvent = () => {
        if(action === "$") {
            dispatch({
                type: 'CHG_CURRENCY',
                payload: currency,
        });

        }if(action === "€") {
                dispatch({
                    type: 'CHG_CURRENCY',
                    payload: currency,
                });

        }if(action === "╣") {
                dispatch({
                    type: 'CHG_CURRENCY',
                    payload: currency,
                });

        }else{
                dispatch({
                       type: 'CHG_CURRENCY',
                       payload: currency,
                });

    }
}
    

    return (
        <div className="custom-select" style={{ marginLeft: '2rem' , color: 'green'}} >
        <select className="custom-select" id="inputCurrencySelect01" onChange={submitEvent}>
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