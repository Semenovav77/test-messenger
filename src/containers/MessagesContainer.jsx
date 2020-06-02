import React from 'react';

import {Messages} from './../components';
import {connect} from 'react-redux';
import {addMessagesAC, delDialogAC, delMessageAC} from '../redux/dialogs-reducer';

const mapStateToProps = (state) => ({
    messages: state.dialogsPage.messages,
    idAuth: state.dialogsPage.idAuth,
    currentDialog: state.dialogsPage.currentDialog,
    dialogs: state.dialogsPage.dialogs,
});

export default connect(mapStateToProps, {addMessagesAC, delDialogAC, delMessageAC})(Messages);

