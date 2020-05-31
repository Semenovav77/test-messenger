import React from 'react';

import './Messages.scss';

const Messages = () => {
    return (
        <div className='messages'>
            <div className='messages__header'>
            </div>
            <div className='messages__current-dialog'>
            </div>
            <div className='messages__input'>
                <input type='text'/>
                <button>Отправить</button>
            </div>
        </div>
    );
};

export default Messages;