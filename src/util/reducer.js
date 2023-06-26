export const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_PROFILE':
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};
