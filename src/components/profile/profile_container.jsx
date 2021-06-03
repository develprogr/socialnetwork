import { connect } from 'react-redux';
import { addPostAC, getMyStatusTC, myDataTC, updateMyStatusTC} from '../../redux/profile_reducer';
import Profile from './profile';
import {compose} from 'redux';


const mapStateToProps = (state) => {
	return  {
		newPostText: state.profilePage.newPostText,
		posts: state.profilePage.posts,
		myProfile: state.profilePage.myData,
		isAuthorized: state.authReducer.isAuthorized,
		status: state.profilePage.status
	}
};

const mapDispatchToProps = (dispatch) => {
    return {
		addPost: (newPostText) => {
			dispatch(addPostAC(newPostText))
		},

		myProfileData: () => dispatch(myDataTC()),

		updateMyStatus: (status) => {
			dispatch(updateMyStatusTC(status))
		},
		
		getMyStatus: () => {
			dispatch(getMyStatusTC())
		}
    }
};


export default compose(
	connect(mapStateToProps, mapDispatchToProps)
	// withRedirectToLogin
)(Profile);






























// function ProfileContainer() {
//     return <StoreContext.Consumer> 
//         { 
//             (store) => {

//                 // const newPostText = store.getState().profileReducer.newPostText,
//                 //     posts = store.getState().profileReducer.posts;

//                 // function addPost() {
//                 //     return store.dispatch(addPostAC);
//                 // }

//                 // const updateNewPost = (value) => {
//                 //     store.dispatch(updateNewPostAC(value));
//                 // };

//                 return <Profile addPost={addPost} updateNewPost={updateNewPost} newPostText={newPostText} posts={posts}/>
//             }
//         }
//     </StoreContext.Consumer>
// }

