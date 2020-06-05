import React from 'react';

import {Dialogs} from '../components';
import {connect} from 'react-redux';
import {getDialogsAC, getMessagesAC} from "../redux/dialogs-reducer";
import {DialogType} from "../components/types/types";
import {AppStateType} from "../redux/redux-store";

type MapStatePropType = {
    dialogs: Array<DialogType>,
    currentDialog: string | null,
    isFetchingDialogs: boolean
};

type MapDispatchPropTypes = {
    getDialogsAC: () => void,
    getMessagesAC: (dialogId: string) => void
};

type OwnPropTypes = {}

const mapStateToProps = (state:AppStateType): MapStatePropType => ({
    dialogs: state.dialogsPage.dialogs,
    currentDialog:state.dialogsPage.currentDialog,
    isFetchingDialogs:state.dialogsPage.isFetchingDialogs
});

export default connect<MapStatePropType, MapDispatchPropTypes, OwnPropTypes, AppStateType>(mapStateToProps, {getDialogsAC, getMessagesAC})(Dialogs);

