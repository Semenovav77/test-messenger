import React, {useState, useEffect} from 'react';

import {SaveOutlined} from "@ant-design/icons";
import './InputContact.scss'

const InputContact = ({onToogle, userFullname, setUserFullname}) => {
   const [valueInput, setValueInput] = useState('');
   const onChangeInput = (e) => {
       setValueInput(e.target.value)
   };
    useEffect(() => {
        setValueInput(userFullname);
    }, []);
    const onSendValue = () => {
        setUserFullname(valueInput);
        onToogle();
    };
    return (
        <div className='input-block'>
            <div className='input'>
                <input type='text' value={valueInput} onChange={onChangeInput}/>
            </div>
            <div className='input-btn' onClick={onSendValue}>
                <SaveOutlined style={{fontSize: '24px', color: 'rgb(147, 149, 150)'}}/>
            </div>
        </div>
    );
};

export default InputContact;