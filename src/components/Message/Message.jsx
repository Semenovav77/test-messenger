import React from 'react';

import './Message.scss'

const Message = ({message}) => {
    return (
        <div className='message'>
            <div className='message__bubble'>
                <div className='text'>
                    {message.text && message.text}
                </div>
                <div className='date'>
                    <span>
                        {message.addedAt}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Message;