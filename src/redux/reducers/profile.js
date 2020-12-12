const initialState = {
  data: {},
  userId: 0,
  setProfile: false,
  isLoading: false,
  isError: false,
  isSuccess: false,
  alertMsg: '',
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
        alertMsg: action.payload.response.data.message,
      };
    }
    case 'GET_PROFILE_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        userId: action.payload.data.data.id,
        alertMsg: '',
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
    case 'SET_AVA_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'SET_AVA_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case 'SET_AVA_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
      };
    }
    case 'ADD_DEVICE_TOKEN_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'ADD_DEVICE_TOKEN_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case 'ADD_DEVICE_TOKEN_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
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
