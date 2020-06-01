import React from 'react';
import classNames from 'classnames';

import './Dialog.scss';
import { format } from 'date-fns';

const Dialog = ({dialog, currentDialog, getMessagesAC}) => {
    return (
        <div className={classNames('item', {'item--iscurrent': (dialog.id === currentDialog)})} onClick={() => getMessagesAC(dialog.id)}>
            <div className='item__left'>
                <img src={dialog.avatar} alt={`Avatar${dialog.userName}`}/>
            </div>
            <div className='item__info'>
                <div className='item__info-top'>
                    <div className='name'>{dialog.userName}</div>
                    <div className='time'><span> {format(Date.parse(dialog.lastMessageDate), 'dd.MM.yyyy')}</span></div>
                </div>
                <div className='item__info-bottom'>
                    <span>Здесь будет последнее сообщение</span>
                </div>
            </div>
        </div>
    );
};

export default Dialog;