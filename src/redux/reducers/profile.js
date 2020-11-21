const initialState = {
  data: {},
  setProfile: false,
  isLoading: false,
  isError: false,
  isSuccess: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
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
