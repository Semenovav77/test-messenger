import React from 'react';
import classNames from 'classnames';

import './Message.scss';
import {format} from "date-fns";

const Message = ({message, idAuth}) => {
    return (
        <div className={classNames('message', {'message--isme': (message.senderId === idAuth)})}>
            <div className='message__bubble'>
                <div className='text'>
                    {message.text && message.text}
                </div>
                <div className='date'>
                    <span>
                        {format(Date.parse(message.addedAt), 'HH:mm dd.MM.yyyy')}
                      {/*  {message.addedAt}*/}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Message;