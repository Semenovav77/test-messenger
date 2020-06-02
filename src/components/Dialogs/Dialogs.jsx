import React, {useEffect, useState} from 'react';
import orderBy from 'lodash/orderBy'

import './Dialogs.scss';
import {Dialog} from './../../components';
import {Input} from './../../components';

const Dialogs = ({dialogs, currentDialog, getDialogsAC, getMessagesAC}) => {

    const [value, setValue] = useState('');
    const [dialogsFiltred, setDialogsFiltred] = useState(Array.from(dialogs));
    const onChangeInput = (e) => {
        let target = e.target.innerText;
        if (target === '\n') {target = '';}
        setDialogsFiltred(dialogs.filter(el => el.userName.toLowerCase().indexOf(target.toLowerCase()) >= 0));
        setValue(target);
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
                {(orderBy(dialogsFiltred, ["lastMessageDate"], ["desc"])).map((dialog) => <Dialog key={dialog.id}
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