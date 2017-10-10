
const initialState = {
  amount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_AMOUNT':
      return [
        ...state,
        {
          amount: action.text,
        },
      ];
    default:
      return state;
  }
};
