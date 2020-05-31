import React from 'react';

import './App.scss';
import {MessagesContainer} from './containers';
import {DialogsContainer} from './containers';

function App() {
  return (
    <>
        <div className='chat'>
        <div className='chat__dialogs'>
            <DialogsContainer/>
        </div>
        <div className='chat__messages'>
            <MessagesContainer/>
        </div>
        </div>
    </>

  );
}

export default App;
