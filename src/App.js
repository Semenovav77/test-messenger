import React from 'react';

import './App.scss';
import {Messages} from './components';
import {DialogsContainer} from './containers';

function App() {
  return (
    <>
        <div className='chat'>
        <div className='chat__dialogs'>
            <DialogsContainer/>
        </div>
        <div className='chat__messages'>
            <Messages/>
        </div>
        </div>
    </>

  );
}

export default App;
