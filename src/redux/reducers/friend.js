const initialState = {
  data: [],
  detail: {},
  pageInfo: {},
  isLoading: false,
  isError: false,
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DETAIL_FRIEND_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_DETAIL_FRIEND_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case 'GET_DETAIL_FRIEND_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        detail: action.payload.data.data,
      };
    }
    case 'GET_CONTACT_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_CONTACT_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload.response.data.message,
      };
    }
    case 'GET_CONTACT_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        pageInfo: action.payload.data.pageInfo,
        alertMsg: '',
      };
    }
    case 'SEARCH_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'SEARCH_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload.response.data.message,
      };
    }
    case 'SEARCH_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        pageInfo: action.payload.data.pageInfo,
        alertMsg: '',
      };
    }
    case 'NEXT_CONTACT_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'NEXT_CONTACT_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload.response.data.message,
      };
    }
    case 'NEXT_CONTACT_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: [...state.data, ...action.payload.data.data],
        pageInfo: action.payload.data.pageInfo,
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
