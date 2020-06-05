import {Profile} from '../components';
import {connect} from 'react-redux';
import {setUserFullname} from '../redux/dialogs-reducer';
import {AppStateType} from "../redux/redux-store";

type MapStatePropType = {
    userFullname: string
};

type MapDispatchPropTypes = {
    setUserFullname: (fullname: string) => void
};

type OwnPropTypes = {
    setProfile: (profile: boolean) => void
}


const mapStateToProps = (state: AppStateType): MapStatePropType => ({
    userFullname: state.dialogsPage.userFullname,
});

export default connect<MapStatePropType, MapDispatchPropTypes, OwnPropTypes, AppStateType>(mapStateToProps, {setUserFullname})(Profile);

