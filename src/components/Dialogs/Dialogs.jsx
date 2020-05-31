import React from 'react';

import './Dialogs.scss';
import {Dialog} from './../../components';

const Dialogs = ({dialogs}) => {
    return (
        <div className='dialogs'>
            <div className='dialogs__header'>
            </div>
            <div className='dialogs__search'>
                <input type='text'/>
            </div>
            <div className='dialogs__list'>
                {dialogs.map((dialog) => <Dialog key={dialog.id} dialog={dialog}/>)}
            </div>
        </div>
    )
        ;
};

export default Dialogs;