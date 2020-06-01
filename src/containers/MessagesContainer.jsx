import React from 'react';

import {Messages} from './../components';
import {connect} from 'react-redux';
import {addMessagesAC} from '../redux/dialogs-reducer';

const mapStateToProps = (state) => ({
    messages: state.dialogsPage.messages,
    idAuth: state.dialogsPage.idAuth,
    currentDialog: state.dialogsPage.currentDialog
});

export default connect(mapStateToProps, {addMessagesAC})(Messages);

