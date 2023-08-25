import axios from "axios";
import {
  GET_API_FAIL,
  GET_API_REQ,
  GET_API_SUCCESS,
  GET_API_SUCCESS_ID,
} from "./coffee.types";
import { AppDispatch } from "../store";

const getCoffeeApiReq = () => {
  return {
    type: GET_API_REQ,
  };
};

const getCoffeeApiSuc = (payload: []) => {
  return {
    type: GET_API_SUCCESS,
    payload,
  };
};

const getCoffeeApiSucId = (payload: []) => {
  return {
    type: GET_API_SUCCESS_ID,
    payload,
  };
};

const getCoffeeApiFail = () => {
  return {
    type: GET_API_FAIL,
  };
};

export const getCoffeeApi = () => async (dispatch: AppDispatch) => {
  dispatch(getCoffeeApiReq());
  try {
    const response = await axios.get(
      `https://cafe-kerala-backend.onrender.com/coffees`
    );
    dispatch(getCoffeeApiSuc(response.data));
  } catch (error) {
    dispatch(getCoffeeApiFail());
  }
};

export const getCoffeeApiWithId =
  (id: String) => async (dispatch: AppDispatch) => {
    dispatch(getCoffeeApiReq());
    try {
      const response = await axios.get(
        `https://cafe-kerala-backend.onrender.com/coffees/${id}`
      );
      dispatch(getCoffeeApiSucId(response.data));
    } catch (error) {
      dispatch(getCoffeeApiFail());
    }
  };
