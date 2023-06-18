import {
  NOTE_LIST_SUCCESS,
  NOTE_LIST_REQUEST,
  NOTE_LIST_FAIL,
} from "../constants/notesConstants";

export const notesRegisterReducer = (state = { notes: [] }, action) => {
  switch (action.type) {
    case NOTE_LIST_REQUEST:
      return { loading: true };
    case NOTE_LIST_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case NOTE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
