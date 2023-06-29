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
    case 'UPDATE_LANGUAGES':
      return {
        ...state,
        languages: state.languages.map((language) => {
          if (language.id === action.payload.id) {
            return {
              ...language,
              [action.payload.key]: action.payload.value,
            };
          }
          return language;
        }),
      };
    case 'UPDATE_SKILLS':
      return {
        ...state,
        skills: state.skills.map((skill) => {
          if (skill.id === action.payload.id) {
            return {
              ...skill,
              [action.payload.key]: action.payload.value,
            };
          }
          return skill;
        }),
      };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};
