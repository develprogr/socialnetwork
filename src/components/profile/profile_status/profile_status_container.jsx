import { connect } from 'react-redux';
import ProfileStatus from './profile_status';
import React from 'react';

const mapStateToProps = (state) => {
    return {
        status: state.profilePage.status
    }
}


class ProfileStatusContainer extends React.Component {
    render() {
        return <ProfileStatus {...this.props} />
    }
}

export default connect(mapStateToProps)(ProfileStatusContainer);