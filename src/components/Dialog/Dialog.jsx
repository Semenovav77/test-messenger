import React from 'react';

import './Dialog.scss';

const Dialog = ({dialog}) => {
    return (
        <div className='item'>
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