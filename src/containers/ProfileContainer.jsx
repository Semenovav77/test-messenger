import React from 'react';

import {Profile} from './../components';
import {connect} from 'react-redux';
import {setUserFullname} from './../redux/dialogs-reducer'

const mapStateToProps = (state) => ({
    userFullname: state.dialogsPage.userFullname,
});

export default connect(mapStateToProps, {setUserFullname})(Profile);

