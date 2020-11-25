const initialState = {
  data: [],
  pageInfo: {},
  detail: [],
  detailInfo: {},
  isLoading: false,
  isError: false,
  isSucces: false,
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
    case 'GET_MSG_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_MSG_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case 'GET_MSG_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        detail: action.payload.data.data,
        detailInfo: action.payload.data.pageInfo,
      };
    }
    case 'SEND_MSG_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'SEND_MSG_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case 'SEND_MSG_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
      };
    }
    default: {
      return state;
    }
  }
};