import React, {useState, useEffect} from 'react';
import classNames from 'classnames';

import './Message.scss';
import {format} from 'date-fns';
import {EllipsisOutlined} from '@ant-design/icons'
import {Popover} from 'antd';
import reactStringReplace from 'react-string-replace';
import {MessageType} from "../types/types";

type Props = {
    message: MessageType,
    idAuth: string,
    currentDialog: string ,
    delMessageAC: (id: string, dialogId: string) => void
}

const Message: React.FC<Props> = ({message, idAuth, currentDialog, delMessageAC}) => {

    const [visible, setVisible] = useState<boolean>(false);

    const toogleVisible = () => {
        setVisible(true);
    };

    const onDelMessage = () => {
        delMessageAC(message.id, currentDialog)
    };

    let timer: ReturnType<typeof setTimeout>;

    const handleClick = (element: any, e: any) => {
        if (element && !element.contains(e.target)) {
           timer = setTimeout(() => setVisible(false), 200)
        }
    };

    useEffect(() => {
        const element = document.getElementById(message.id);
        //@ts-ignore
        document.addEventListener("click", handleClick.bind(this, element));

        return () => {
            //@ts-ignore
            document.removeEventListener("click", handleClick.bind(this, element));
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className={classNames('message', {'message--isme': (message.senderId === idAuth),
            'message--notme': (message.senderId !== idAuth)})}>
            <div className={classNames('message__bubble', {'focus': (visible)})}>
                <div className='text'>
                    {message.text && <p> {reactStringReplace(message.text, /<img class="emoji emoji-sizer" (.+?)>/g, (match, i) => (
                        reactStringReplace(match, /src="(.+?)"/g,(matchi,i) => (
                            <img key={i} className="emoji emoji-sizer" src={`${matchi}`} alt='img' />
                        ))

                    ))} </p>}
                </div>
                <div className='date'>
                    <span>
                        {format(Date.parse(message.addedAt), 'HH:mm dd.MM.yyyy')}
                    </span>
                </div>
                <Popover
                    placement="bottomRight"
                    content={
                        <>
                            <div className='item-popover' onClick={onDelMessage}>
                                Удалить сообщение
                            </div>
                        </>
                    }
                    trigger="focus">
                    <div className='message-btn' id={message.id} onClick={toogleVisible}>
                        <button><EllipsisOutlined style={{fontSize: '24px', color: 'rgb(147, 149, 150)'}}/></button>
                    </div>
                </Popover>
            </div>
        </div>
    );
};

export default Message;