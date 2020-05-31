import React from 'react';

import {Dialogs} from './../components';
import {connect} from 'react-redux';
import {getDialogsAC, getMessagesAC} from "../redux/dialogs-reducer";


const mapStateToProps = (state) => ({
    dialogs: state.dialogsPage.dialogs,
    currentDialog:state.dialogsPage.currentDialog
});

export default connect(mapStateToProps, {getDialogsAC, getMessagesAC})(Dialogs);

