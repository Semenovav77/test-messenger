import React, {useEffect, useRef, useState} from 'react';

import './Messages.scss';
import {Message} from "../index";
import {Input} from '../index';
import {HeaderCurrentContact} from '../index';
import orderBy from 'lodash/orderBy';
import {DialogType, MessageType} from "../types/types";

type Props = {
    messages: Array<MessageType>,
    dialogs: Array<DialogType>,
    idAuth: string,
    currentDialog: string | null,
    addMessagesAC: (text: string, senderId: string, dialogId: string) => void,
    delDialogAC: (id: string) => void
    delMessageAC: (id: string, dialogId: string) => void
}

const Messages: React.FC<Props> = ({messages, dialogs, idAuth, currentDialog, addMessagesAC, delDialogAC, delMessageAC}) => {

    const [value, setValue] = useState<string>('');

    const onChangeInput = (e: React.ChangeEvent<HTMLDivElement>) => {
        if (e.target.innerText === '\n') {
            e.target.innerHTML = ''
        }
        setValue(e.target.innerHTML);
    };

    const messagesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (messagesRef.current) {
            const block = document.getElementById("block-messages");
            //@ts-ignore
            block.scrollTop = block.scrollHeight;
        }

    }, [messages]);

    if (!currentDialog) {
        return (
            <div style={{
                backgroundColor: '#EDEDED',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
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
                {(orderBy(messages, ["addedAt"], ["asc"])).map((message) => <Message key={message.id}
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