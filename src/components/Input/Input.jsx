import React, {useState, useRef} from 'react';

import {SmileOutlined, CheckCircleOutlined} from '@ant-design/icons';

const Input = ({idAuth, currentDialog, addMessagesAC}) => {

    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.innerText);
    };

    const sendMessage = () => {
        if (currentDialog && value) addMessagesAC(value, idAuth, currentDialog);
        setValue('');
        cellRef.current.textContent = '';
    };

    const cellRef = useRef(null);

    const sendMessageOnKey = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (currentDialog && value) addMessagesAC(value, idAuth, currentDialog);
            setValue('');
            cellRef.current.textContent = '';
        }
    };

    return (
        <>
            <div className='left-icon'>
                <SmileOutlined style={{fontSize: '30px', color: 'rgb(147, 149, 150)'}}/>
            </div>
            <div className="input-add"
                 contentEditable={true} suppressContentEditableWarning
                 value={value} onInput={(e) => handleChange(e)}
                 ref={cellRef}
                 onKeyPress={sendMessageOnKey}>
            </div>
            {!value &&
            <div className="input-placeholder">
                Напишите сообщение
            </div>}
            <div className='right-icon'>
                <CheckCircleOutlined style={{fontSize: '34px', color: 'rgb(147, 149, 150)'}} onClick={sendMessage}/>
            </div>
        </>
    );
};

export default Input;