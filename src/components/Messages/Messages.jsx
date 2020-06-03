import React, {useEffect, useRef, useState} from 'react';

import './Messages.scss';
import {Message} from "./../../components";
import {Input} from './../../components';
import {HeaderCurrentContact} from './../../components';

const Messages = ({messages, dialogs, idAuth, currentDialog, addMessagesAC, delDialogAC, delMessageAC}) => {
    const [value, setValue] = useState('');
    const onChangeInput = (e) => {
        let target = e.target.innerText;
        if (target === '\n') {target = ''}
        setValue(target);
    };
    const messagesRef = useRef(null);
    useEffect(() => {
        if (messagesRef.current) {
            messagesRef.current.scrollTo(0, 9999)
        }
    },[messages]);

    return (
        <div className='messages'>
            <div className='messages__header'>
                {dialogs.map(dialog => (dialog.id === currentDialog) && <HeaderCurrentContact key={dialog.id}
                                                                                              dialog={dialog}
                                                                                              delDialogAC={delDialogAC}
                                                                                              />)}
            </div>
            <div className='messages__current-dialog' ref={messagesRef}>
                {messages.map((message) => <Message key={message.id}
                                                    message={message}
                                                    idAuth={idAuth}
                                                    currentDialog={currentDialog}
                                                    delMessageAC={delMessageAC}/>)}
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