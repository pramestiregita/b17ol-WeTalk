const initialState = {
  data: [],
  pageInfo: {},
  isLoading: false,
  isError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_ALL_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case 'GET_ALL_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        pageInfo: action.payload.data.pageInfo,
      };
    }
    default: {
      return state;
    }
  }
};
