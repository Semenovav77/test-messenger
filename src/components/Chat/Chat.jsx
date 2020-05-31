import React from 'react';

import {Dialogs} from './../../components';
import {Messages} from './../../components';
import './Chat.scss'

const Chat = () => {
    return (
        <div className='chat'>
            <div className='chat__dialogs'>
                <Dialogs/>
            </div>
            <div className='chat__messages'>
                <Messages/>
            </div>
        </div>
    );
};

export default Chat;