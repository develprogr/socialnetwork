import "./App.css";
import NavBar from "./components/navbar/navbar";
import News from './components/news/news';
import Settings from './components/settings/settings';
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/dialogs/dialogs_container";
import UserContainer from "./components/users/user/user_container";
import HeaderContainer from "./components/header/header_container";
import { LoginContainer } from "./forms/LoginContainer";
import React from "react";
import { connect } from "react-redux";
import {Preloader} from './components/preloader/preloader';
import { isAuthorizedMeTC } from "./redux/auth_reducer";
import { isFetchingAC } from "./redux/fetching_reducer";

import UsersContainer from './components/users/users_container';
// const UsersContainer= React.lazy(() => import('./components/users/users_container'));

const ProfileContainer = React.lazy(() => import('./components/profile/profile_container'));
// import ProfileContainer from "./components/profile/profile_container";


const reactSuspense = Component => props => <React.Suspense fallback={<Preloader />}> <Component {...props} /> </React.Suspense>;


class App extends React.Component {
	
	componentDidMount() {
		this.props.checkAuthorization();
	}


	render() {


		if (this.props.isFetching) { 
			return <Preloader />
		}

		return (
			<BrowserRouter>
				<div className="app__wrapper">
					<HeaderContainer />
					<NavBar />
					<div className="app__content_wrapper">
						<Route path='/dialogs' render={() => <DialogsContainer />} />
						
						<Route exact path="/profile" render={reactSuspense(ProfileContainer)} />

						{/* <Route exact path='/users' render={reactSuspense(UsersContainer)} /> */}
						<Route exact path='/users' render={() => <UsersContainer /> } />


						<Route path='/profile/:userId' render={() => <UserContainer />} />
						<Route path="/news" component={News} />
						<Route path="/settings" render={() => <Settings />} />
						<Route path='/login' render={() => <LoginContainer />} />
						
					</div>
				</div>
			</BrowserRouter>
		);
	
	}
}

const mapStateToProps = (state) => {
	return {
		isFetching: state.fetchingReducer.isFetching
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		checkAuthorization: () => {
			dispatch(isFetchingAC(true));
			dispatch(isAuthorizedMeTC())
				.then(() => {
					dispatch(isFetchingAC(false));
				});
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
