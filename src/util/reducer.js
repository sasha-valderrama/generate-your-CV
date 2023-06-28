export const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_PROFILE':
      return {
        ...state,
        profile: {
          ...state.profile,
          [action.payload.key]: action.payload.value,
        },
      };
    case 'UPDATE_ABOUT':
      return {
        ...state,
        about: {
          ...state.about,
          [action.payload.key]: action.payload.value,
        },
      };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};
