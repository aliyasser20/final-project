import * as actionTypes from "../actions/actionTypes";

const initialState = {
  allConfigurations: [],
  currentConfigurationId: NaN,
  currentConfigurationName: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_CONFIGURATION_ID:
      return {
        ...state,
        currentConfigurationId: action.id
      };
    case actionTypes.SET_CURRENT_CONFIGURATION_NAME:
      return {
        ...state,
        currentConfigurationName: action.name
      };
    default:
      return state;
  }
};

export default reducer;
