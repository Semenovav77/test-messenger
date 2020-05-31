import React from 'react';
import classNames from 'classnames';

import './Dialog.scss';

const Dialog = ({dialog, currentDialog, getMessagesAC}) => {
    return (
        <div className={classNames('item', {'item--iscurrent': (dialog.id === currentDialog)})} onClick={() => getMessagesAC(dialog.id)}>
            <div className='item__left'>
                <img src={dialog.avatar} alt={`Avatar${dialog.userName}`}/>
            </div>
            <div className='item__info'>
                <div className='item__info-top'>
                    <div><b>{dialog.userName}</b></div>
                    <div><span> {dialog.lastMessageDate}</span></div>
                </div>
                <div className='item__info-bottom'>
                    Последнее сообщение
                </div>
            </div>
        </div>
    );
};

export default Dialog;