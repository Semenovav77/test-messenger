import React, {useState} from 'react';

import './Profile.scss'
import {ArrowLeftOutlined, EditOutlined} from "@ant-design/icons";
import {InputContact} from "../../components";

const Profile = ({setProfile, userFullname, setUserFullname}) => {
    const [toogleEdit, setToogleEdit] = useState(false);
    const onToogle = () => {
        setToogleEdit(!toogleEdit)
    };
    return (
        <div className='profile'>
            <div className='profile__header'>
                <div className='back-btn' onClick={() => setProfile(false)}>
                    <ArrowLeftOutlined style={{fontSize: '24px', color: 'white'}}/>
                </div>
                <div className='right-block'>
                    Профиль
                </div>
            </div>
            <div className='profile__info'>
                <p> Ваше имя </p>
                {(!toogleEdit) ? (
                        <div className='name-block'>
                            <div className='name'>
                                {userFullname}
                            </div>
                            <div className='edit-btn' onClick={onToogle}>
                                <EditOutlined style={{fontSize: '24px', color: 'rgb(147, 149, 150)'}}/>
                            </div>
                        </div>
                    ) :
                    (
                        <InputContact onToogle={onToogle}
                                      userFullname={userFullname}
                                      setUserFullname={setUserFullname}/>
                    )
                }

            </div>
        </div>
    );
};

export default Profile;