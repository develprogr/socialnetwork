import Dialogs from './dialogs';
import {addMessageAC} from '../../redux/messages_reducer';
import { connect } from 'react-redux';
import { withRedirectToLogin } from '../../hoc/with_redirect_to_login';


const mapStateToProps = (state) => {
    return {
        dialogsElements: state.messagesPage.dialogs, 
        messagesElements:state.messagesPage.messages,
        currentMessageValue: state.messagesPage.currentMessageText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage:(message) => {
            dispatch(addMessageAC(message))
       }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withRedirectToLogin(Dialogs));

export default DialogsContainer;