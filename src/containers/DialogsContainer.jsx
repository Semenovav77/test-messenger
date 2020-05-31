import React from 'react';

import {Dialogs} from './../components';
import {connect} from 'react-redux';


const mapStateToProps = (state) => ({
    dialogs: state.dialogsPage.dialogs
});

export default connect(mapStateToProps, {})(Dialogs);

