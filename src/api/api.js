import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'eccf2999-7c74-4707-a3db-fc760c574e04'
    }

});


export const usersAPI = {

    getUsers: async (numberList, count) => {
        const response = await instance.get(`users?page=${numberList}&count=${count}`);
        return response.data; 
    },

    setUser: async (userId) => {
        const response = await instance.get('profile/' + userId);
        return response.data; 
    },

    isfollowUser(userId) {
        return instance.get(`follow/${userId}`).then(response => response.data);   // return false or true
    },

    followUser(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data);
    },

    unFollowUser(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data);
    }
};


export const isAuthorizedAPI = {

    me: async () => {
        const response = await instance.get('auth/me');
            return response.data;
    },

    login(email, password, rememberMe = false) {
        return instance.post('/auth/login', {email, password, rememberMe})
            .then(response => response.data);
    },

    logout() {
        return instance.delete('/auth/login').then(response => response.data);
    }
};


export const profileAPI = {
 
    getUserProfile: (userId) => {
        return instance.get('profile/' + userId);
    },
    
    getUserStatus(userId) {
        return instance.get('profile/status/' + userId);
    },

    updateMyStatus(status) {
        return instance.put('profile/status', {status: status});
    },

    updateProfilePhoto: (photo) => {
        const formData = new FormData();
        formData.append('image', photo);
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
}