import React, {useEffect} from 'react';

import './Dialogs.scss';
import {Dialog} from './../../components';
import {getDialogsAC} from "../../redux/dialogs-reducer";

const Dialogs = ({dialogs, currentDialog, getDialogsAC, getMessagesAC}) => {

    useEffect(() => {
        getDialogsAC();
    },[]);

    return (
        <div className='dialogs'>
            <div className='dialogs__header'>
            </div>
            <div className='dialogs__search'>
                <input type='text'/>
            </div>
            <div className='dialogs__list'>
                {dialogs.map((dialog) => <Dialog key={dialog.id} dialog={dialog} getMessagesAC={getMessagesAC} currentDialog={currentDialog}/>)}
            </div>
        </div>
    )
        ;
};

export default Dialogs;