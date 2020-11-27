const initialState = {
  data: [],
  pageInfo: {},
  detail: [],
  detailInfo: {},
  isLoading: false,
  detailLoading: false,
  newLoading: false,
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
    case 'GET_NEW_PENDING': {
      return {
        ...state,
        newLoading: true,
      };
    }
    case 'GET_NEW_REJECTED': {
      return {
        ...state,
        newLoading: false,
        isError: true,
      };
    }
    case 'GET_NEW_FULFILLED': {
      return {
        ...state,
        newLoading: false,
        isError: false,
        data: action.payload.data.data,
        pageInfo: action.payload.data.pageInfo,
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
    case 'GET_NEW_MSG_PENDING': {
      return {
        ...state,
        newLoading: true,
      };
    }
    case 'GET_NEW_MSG_REJECTED': {
      return {
        ...state,
        newLoading: false,
        isError: true,
      };
    }
    case 'GET_NEW_MSG_FULFILLED': {
      return {
        ...state,
        newLoading: false,
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
    case 'LOGOUT': {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
