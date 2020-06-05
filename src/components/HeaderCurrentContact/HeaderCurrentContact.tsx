import React from 'react';

import {MoreOutlined} from '@ant-design/icons';
import {Popover} from 'antd';
import './HeaderCurrentContact.scss';
import {DialogType} from "../types/types";

type Props = {
    dialog: DialogType,
    delDialogAC: (id: string) => void
}

const HeaderCurrentContact: React.FC<Props> = ({dialog, delDialogAC}) => {
    return (
        <>
            <div className='left-panel'>
                <img src={dialog.avatar} alt='Avatar'/>
            </div>
            <div className='center-panel'>
                {dialog.userName}
            </div>
            <Popover
                placement="bottomRight"
                content={
                    <>
                        <div className='item-popover' onClick={() => delDialogAC(dialog.id)}>
                            Удалить диалог
                        </div>
                    </>
                }
                trigger="click">
                <div className='right-panel'>
                    <MoreOutlined style={{fontSize: '24px', color: 'rgb(147, 149, 150)'}}/>
                </div>
            </Popover>
        </>
    );
};

export default HeaderCurrentContact;