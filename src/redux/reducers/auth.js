const initialState = {
  token: '',
  isLogin: false,
  isLoading: false,
  isError: false,
  isSuccess: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'LOGIN_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case 'LOGIN_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isLogin: true,
        token: action.payload.data.token,
        refreshToken: action.payload.data.refreshToken,
        alertMsg: '',
      };
    }
    case 'RELOGIN_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'RELOGIN_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case 'RELOGIN_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isLogin: true,
        isSuccess: true,
        token: action.payload.data.token,
        alertMsg: '',
      };
    }
    case 'LOGOUT': {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
