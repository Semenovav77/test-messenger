import React from 'react';

import './HeaderCurrentContact.scss';

const HeaderCurrentContact = ({dialog}) => {
    return (
        <>
            <div className='left-panel'>
                <img src={dialog.avatar} alt='Avatar'/>
            </div>
            <div className='center-panel'>
                {dialog.userName}
            </div>
            <div className='right-panel'>

            </div>
        </>
    );
};

export default HeaderCurrentContact;