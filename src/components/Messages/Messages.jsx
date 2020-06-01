import React, {useState} from 'react';

import './Messages.scss';
import {Message} from "./../../components";
import {Input} from './../../components';
import {HeaderCurrentContact} from './../../components';

const Messages = ({messages, dialogs, idAuth, currentDialog, addMessagesAC}) => {
    const [value, setValue] = useState('');
    const onChangeInput = (e) => {
        setValue(e.target.innerText);
    };
    return (
        <div className='messages'>
            <div className='messages__header'>
                {dialogs.map(dialog => (dialog.id === currentDialog) && <HeaderCurrentContact key={dialog.id} dialog={dialog}/>)}
            </div>
            <div className='messages__current-dialog'>
                {messages.map((message) => <Message key={message.id}
                                                    message={message}
                                                    idAuth={idAuth}/>)}
            </div>
                <Input idAuth={idAuth}
                       currentDialog={currentDialog}
                       addMessagesAC={addMessagesAC}
                       placeholder={"Напишите сообщение"}
                       message={true}
                       value={value}
                       setValue={setValue}
                       onChangeInput={onChangeInput}/>
        </div>
    );
};

export default Messages;