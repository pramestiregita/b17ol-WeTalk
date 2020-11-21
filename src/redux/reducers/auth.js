const initialState = {
  token: '',
  isLogin: false,
  isLoading: false,
  isError: false,
  alertMsg: '',
  setProfile: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN': {
      if (action.payload === '085717956854') {
        return {
          ...state,
          token: 'abc',
          isLogin: true,
          alertMsg: 'Login successfully',
        };
      } else {
        return {
          ...state,
          token: '',
          isLogin: false,
          isLoading: false,
          isError: false,
          alertMsg: 'Wrong phone number',
        };
      }
    }
    default: {
      return state;
    }
  }
};
