import React from 'react';

import './Messages.scss';
import {Message} from "./../../components";
import {Input} from './../../components'

const Messages = ({messages, idAuth, currentDialog, addMessagesAC}) => {
    return (
        <div className='messages'>
            <div className='messages__header'>
            </div>
            <div className='messages__current-dialog'>
                {messages.map((message) => <Message key={message.id} message={message} idAuth={idAuth}/>)}
            </div>
            <div className='messages__input'>
                <Input idAuth={idAuth} currentDialog={currentDialog} addMessagesAC={addMessagesAC}/>
            </div>
        </div>
    );
};

export default Messages;