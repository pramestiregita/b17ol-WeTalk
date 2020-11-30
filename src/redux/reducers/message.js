const initialState = {
  data: [],
  pageInfo: {},
  detail: [],
  detailInfo: {},
  isLoading: false,
  detailLoading: false,
  isError: false,
  isSucces: false,
  alertMsg: '',
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
        alertMsg: action.payload.response.data.message,
      };
    }
    case 'GET_ALL_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        pageInfo: action.payload.data.pageInfo,
        alertMsg: '',
      };
    }
    case 'GET_MSG_PENDING': {
      return {
        ...state,
        detailLoading: true,
      };
    }
    case 'GET_MSG_REJECTED': {
      return {
        ...state,
        detailLoading: false,
        isError: true,
        alertMsg: action.payload.response.data.message,
      };
    }
    case 'GET_MSG_FULFILLED': {
      return {
        ...state,
        detailLoading: false,
        isError: false,
        detail: action.payload.data.data,
        detailInfo: action.payload.data.pageInfo,
      };
    }
    case 'SEND_NEW_MSG_PENDING': {
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
    case 'NEXT_MSG_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'NEXT_MSG_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case 'NEXT_MSG_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        detail: [...state.detail, ...action.payload.data.data],
        detailInfo: action.payload.data.pageInfo,
      };
    }
    case 'NEXT_ALL_MSG_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'NEXT_ALL_MSG_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case 'NEXT_ALL_MSG_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: [...state.data, ...action.payload.data.data],
        pageInfo: action.payload.data.pageInfo,
      };
    }
    case 'CLEAR_CHAT': {
      return {
        ...state,
        detailLoading: true,
        detail: [],
        detailInfo: {},
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
