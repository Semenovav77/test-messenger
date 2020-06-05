import React, {useState} from 'react';

import './App.scss';
import {MessagesContainer} from './containers';
import {DialogsContainer} from './containers';
import {ProfileContainer} from './containers';

function App() {
  const [profile, setProfile] = useState<boolean>(false);
  return (
    <>
        <div className='chat'>
        <div className='chat__dialogs'>
            {(!profile) ? <DialogsContainer setProfile={setProfile} /> : <ProfileContainer setProfile={setProfile}/>}
        </div>
        <div className='chat__messages'>
            <MessagesContainer/>
        </div>
        </div>
    </>

  );
}

export default App;
