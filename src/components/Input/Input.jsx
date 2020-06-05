import React, {useRef, useState} from 'react';
import 'emoji-mart/css/emoji-mart.css'

import {SmileOutlined, CheckCircleOutlined, SearchOutlined, CloseOutlined} from '@ant-design/icons';
import './Input.scss'
import classNames from "classnames";
import {Picker} from 'emoji-mart';
import EmojiConvertor from "emoji-js";

let jsemoji = new EmojiConvertor();
jsemoji.img_set = 'facebook';
jsemoji.img_sets.facebook.path = 'https://cdn.jsdelivr.net/emojione/assets/4.5/png/32/';
jsemoji.allow_native = false;
console.log(jsemoji);

const Input = ({idAuth, currentDialog, addMessagesAC, placeholder, message = false, value, setValue, onChangeInput}) => {

    const [emojiVisible, setVisibleEmoji] = useState(false);

    const toogleEmoji = () => {
        setVisibleEmoji(!emojiVisible);
    };

    const sendMessage = () => {
        if (currentDialog && value) addMessagesAC(value, idAuth, currentDialog);
        cellRef.current.textContent = '';
        setValue(cellRef.current.textContent);
        setVisibleEmoji(false);
    };

    const cellRef = useRef(null);

    const sendMessageOnKey = (e) => {
        if ((e.key === 'Enter') && (message)) {
            e.preventDefault();
            sendMessage();
        }
    };

    const handleClick = (n) => {
       /* cellRef.current.focus();*/
        const emoji = jsemoji
            .replace_colons(n.colons)
            .replace("span", "img")
            .slice(0, -7)
            .replace('style="background-image:url(', 'src="')
            .replace(/ data-codepoints="(.+?)"/g, '/')
            .replace(')"', '"');
        cellRef.current.innerHTML = cellRef.current.innerHTML + emoji;
        setValue(cellRef.current.innerHTML);
    };

    return (
        <div className='messages-search__input'>
            {(message) && <div className='left-icon'>
                {(emojiVisible) &&
                <>
                    <CloseOutlined onClick={toogleEmoji} style={{fontSize: '22px', color: 'rgb(147, 149, 150)'}}/>
                    <div className="emoji-picker">
                        <Picker set='facebook' onSelect={handleClick}/>
                    </div>
                </>}
                <SmileOutlined onClick={toogleEmoji} style={{fontSize: '30px', color: 'rgb(147, 149, 150)'}}/>
            </div>}
            {(!message) && <div className='search-icon'>
                <SearchOutlined style={{fontSize: '20px', color: 'rgb(147, 149, 150)'}}/>
            </div>}
            <div className={classNames('input-add', {'search': (!message)})}
                 contentEditable={true} suppressContentEditableWarning
                 onInput={onChangeInput}
                 ref={cellRef}
                 onKeyPress={sendMessageOnKey}
                 >
            </div>
            {(value === '') &&
            <div className={classNames('input-placeholder', {'emoji-open': (emojiVisible)})}>
                {placeholder}
            </div>}
            {(message) && <div className='right-icon'>
                <CheckCircleOutlined style={{fontSize: '34px', color: 'rgb(147, 149, 150)'}} onClick={sendMessage}/>
            </div>}
        </div>
    );
};

export default Input;