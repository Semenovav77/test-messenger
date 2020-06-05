import {Messages} from '../components';
import {connect} from 'react-redux';
import {addMessagesAC, delDialogAC, delMessageAC} from '../redux/dialogs-reducer';
import {DialogType, MessageType} from "../components/types/types";
import {AppStateType} from "../redux/redux-store";

type MapStatePropType = {
    messages: Array<MessageType>,
    idAuth: string
    currentDialog: string | null,
    dialogs: Array<DialogType>,
};

type MapDispatchPropTypes = {
    addMessagesAC: (text: string, senderId: string, dialogId: string) => void,
    delDialogAC: (id: string) => void
    delMessageAC: (id: string, dialogId: string) => void
};

type OwnPropTypes = {}

const mapStateToProps = (state: AppStateType): MapStatePropType => ({
    messages: state.dialogsPage.messages,
    idAuth: state.dialogsPage.idAuth,
    currentDialog: state.dialogsPage.currentDialog,
    dialogs: state.dialogsPage.dialogs,
});

export default connect<MapStatePropType, MapDispatchPropTypes, OwnPropTypes, AppStateType>(mapStateToProps, {addMessagesAC, delDialogAC, delMessageAC})(Messages);

