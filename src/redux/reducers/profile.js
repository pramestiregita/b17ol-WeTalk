const initialState = {
  data: {},
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
      };
    }
    case 'SET_PROFILE': {
      return {
        ...state,
        data: action.payload,
        setProfile: true,
      };
    }
    default: {
      return state;
    }
  }
};
