import React, {useEffect, useState} from 'react';

import './Dialogs.scss';
import {Dialog} from './../../components';
import {Input} from './../../components';

const Dialogs = ({dialogs, currentDialog, getDialogsAC, getMessagesAC}) => {

    const [value, setValue] = useState('');
    const [dialogsFiltred, setDialogsFiltred] = useState(Array.from(dialogs));
    const onChangeInput = (e) => {
        setDialogsFiltred(dialogs.filter(el => el.userName.toLowerCase().indexOf(e.target.innerText.toLowerCase()) >= 0));
        setValue(e.target.innerText);
    };
    useEffect(() => {
        getDialogsAC();
    }, []);
    useEffect(() => {
        setDialogsFiltred(dialogs);
    }, [dialogs]);

    return (
        <div className='dialogs'>
            <div className='dialogs__header'>
            </div>
            <div className='dialogs__search'>
                <Input placeholder={"Поиск"}
                       value={value}
                       setValue={setValue}
                       onChangeInput={onChangeInput}/>
            </div>
            <div className='dialogs__list'>
                {dialogsFiltred.map((dialog) => <Dialog key={dialog.id}
                                                 dialog={dialog}
                                                 getMessagesAC={getMessagesAC}
                                                 currentDialog={currentDialog}
                />)}
            </div>
        </div>
    )
        ;
};

export default Dialogs;