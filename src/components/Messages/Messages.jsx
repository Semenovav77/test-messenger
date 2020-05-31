import React from 'react';

import './Messages.scss';
import {Message} from "./../../components";

const Messages = ({messages, idAuth}) => {
    return (
        <div className='messages'>
            <div className='messages__header'>
            </div>
            <div className='messages__current-dialog'>
                {messages.map((message) => <Message key={message.id} message={message} idAuth={idAuth}/>)}
            </div>
            <div className='messages__input'>
                <input type='text'/>
                <button>Отправить</button>
            </div>
        </div>
    );
};

export default Messages;