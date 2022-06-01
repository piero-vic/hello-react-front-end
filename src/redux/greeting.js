const UPDATE_GREETING = 'UPDATE_GREETING';

const API_URL = 'http://localhost:9000';

export const fetchGreeting = () => async (dispatch) => {
  try {
    const response = await fetch(`${API_URL}/v1/random`);
    const greeting = await response.json();
    if (response.ok) {
      dispatch({ type: UPDATE_GREETING, payload: greeting });
    }
  } catch (error) {
    dispatch({ type: UPDATE_GREETING, payload: { text: 'Error: The back-end should be running in port 9000' } });
  }
};

export const greetingReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_GREETING:
      return action.payload;
    default:
      return state;
  }
};
