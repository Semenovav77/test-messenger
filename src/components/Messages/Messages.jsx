import React, {useEffect, useRef, useState} from 'react';

import './Messages.scss';
import {Message} from "./../../components";
import {Input} from './../../components';
import {HeaderCurrentContact} from './../../components';
import orderBy from "lodash/orderBy";

const Messages = ({messages, dialogs, idAuth, currentDialog, addMessagesAC, delDialogAC, delMessageAC}) => {
    const [value, setValue] = useState('');
    const onChangeInput = (e) => {
        if (e.target.innerText === '\n') {e.target.innerHTML=''}
        setValue(e.target.innerHTML);
    };
    const messagesRef = useRef(null);
    useEffect(() => {
        if (messagesRef.current) {
            const block = document.getElementById("block-messages");
            block.scrollTop = block.scrollHeight;
        }
    },[messages]);

    if (!currentDialog) {
        return (
            <div style={{backgroundColor: '#EDEDED', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <h4>Выберите диалог</h4>
            </div>
        )
    }

    return (
        <div className='messages'>
            <div className='messages__header'>
                {dialogs.map(dialog => (dialog.id === currentDialog) && <HeaderCurrentContact key={dialog.id}
                                                                                              dialog={dialog}
                                                                                              delDialogAC={delDialogAC}
                                                                                              />)}
            </div>
            <div className='messages__current-dialog' id='block-messages' ref={messagesRef}>
                { (orderBy(messages, ["addedAt"], ["asc"])).map((message) => <Message key={message.id}
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