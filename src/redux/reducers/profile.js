const initialState = {
  data: {},
  userId: 0,
  setProfile: false,
  isLoading: false,
  isError: false,
  isSuccess: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PROFILE_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_PROFILE_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case 'GET_PROFILE_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        userId: action.payload.data.data.id,
      };
    }
    case 'SET_PROFILE_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'SET_PROFILE_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case 'SET_PROFILE_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: true,
        setProfile: true,
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
