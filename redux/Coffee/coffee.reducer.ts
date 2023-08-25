import {
  GET_API_FAIL,
  GET_API_REQ,
  GET_API_SUCCESS,
  GET_API_SUCCESS_ID,
} from "./coffee.types";

const initialValue = {
  coffees: [],
  coffee: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialValue, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case GET_API_REQ: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case GET_API_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        coffees: payload,
      };
    }

    case GET_API_SUCCESS_ID: {
      return {
        ...state,
        isLoading: false,
        coffee: payload,
      };
    }

    case GET_API_FAIL: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    default:
      return state;
  }
};

export { reducer };
