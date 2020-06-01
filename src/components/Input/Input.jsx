import React, {useState, useRef} from 'react';

import {SmileOutlined, CheckCircleOutlined, SearchOutlined} from '@ant-design/icons';
import './Input.scss'
import classNames from "classnames";

const Input = ({idAuth, currentDialog, addMessagesAC, placeholder, message = false, value, setValue, onChangeInput}) => {

    const sendMessage = () => {
        if (currentDialog && value) addMessagesAC(value, idAuth, currentDialog);
        setValue('');
        cellRef.current.textContent = '';
    };

    const cellRef = useRef(null);

    const sendMessageOnKey = (e) => {
        if ((e.key === 'Enter') && (message)) {
            e.preventDefault();
            if (currentDialog && value) addMessagesAC(value, idAuth, currentDialog);
            setValue('');
            cellRef.current.textContent = '';
        }
    };

    return (
        <div className='messages-search__input'>
            {(message) && <div className='left-icon'>
                <SmileOutlined style={{fontSize: '30px', color: 'rgb(147, 149, 150)'}}/>
            </div>}
            {(!message) && <div className='search-icon'>
                <SearchOutlined style={{fontSize: '20px', color: 'rgb(147, 149, 150)'}}/>
            </div>}
            <div className={classNames('input-add', {'search': (!message)})}
                 contentEditable={true} suppressContentEditableWarning
                 value={value} onInput={onChangeInput}
                 ref={cellRef}
                 onKeyPress={sendMessageOnKey}>
            </div>
            {!value &&
            <div className='input-placeholder'>
                {placeholder}
            </div>}
            {(message) && <div className='right-icon'>
                <CheckCircleOutlined style={{fontSize: '34px', color: 'rgb(147, 149, 150)'}} onClick={sendMessage}/>
            </div>}
        </div>
    );
};

export default Input;