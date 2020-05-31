import React from 'react';

import {Messages} from './../components';
import {connect} from 'react-redux';


const mapStateToProps = (state) => ({
    messages: state.dialogsPage.messages
});

export default connect(mapStateToProps, {})(Messages);

