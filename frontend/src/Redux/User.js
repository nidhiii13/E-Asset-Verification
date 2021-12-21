const LOGIN_USER = "login_user";
const LOGOUT_USER = "logout_user";

const initState = {
    info: {
        token: localStorage.getItem('token'),
        isLoggedIn: localStorage.getItem('loggedIn'),
        userType: localStorage.getItem('userType')
    }
};


export const loginUser = (data) => {
    return {
        type: LOGIN_USER,
        data
    };
};

export const logoutUser = (data) => {
    return {
        type: LOGOUT_USER,
        data
    };
};

const User = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return{...state, info: action.data}
        case LOGOUT_USER:
            return{...state, info: action.data}
        default: 
            return state;
    }
};

export default User;