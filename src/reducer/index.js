import { nanoid } from 'nanoid';
import { defaultValues, initialState } from '../data';

export const reducer = (state, action) => {
  switch (action.type) {
    // case 'ADD_ITEM':
    //   return {
    //     ...state,
    //     [action.section]: [...state[action.section], action.item],
    //   };
    // case 'REMOVE_ITEM':
    //   return {
    //     ...state,
    //     [action.section]: state[action.section].filter(
    //       (item) => item.id !== action.itemId
    //     ),
    //   };

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
    case 'UPDATE_EXPERIENCES':
      return {
        ...state,
        experiences: state.experiences.map((experience) => {
          if (experience.id === action.payload.id) {
            return {
              ...experience,
              [action.payload.key]: action.payload.value,
            };
          }
          return experience;
        }),
      };
    case 'UPDATE_EDUCATION':
      return {
        ...state,
        education: state.education.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              [action.payload.key]: action.payload.value,
            };
          }
          return item;
        }),
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
    case 'ADD_EXPERIENCE':
      return {
        ...state,
        experiences: [
          ...state.experiences,
          {
            id: nanoid(5),
            from: '',
            to: '',
            position: '',
            company: '',
            location: '',
            description: '',
          },
        ],
      };
    case 'ADD_EDUCATION':
      return {
        ...state,
        education: [
          ...state.education,
          {
            id: nanoid(5),
            from: '',
            to: '',
            university: '',
            degree: '',
            subject: '',
          },
        ],
      };
    case 'ADD_LANGUAGE':
      return {
        ...state,
        languages: [
          ...state.languages,
          { id: nanoid(5), langName: '', proficiency: '' },
        ],
      };
    case 'ADD_SKILL':
      return {
        ...state,
        skills: [...state.skills, { id: nanoid(5), name: '' }],
      };
    case 'REMOVE_EXPERIENCE':
      return {
        ...state,
        experiences: state.experiences.filter(
          (item) => item.id !== action.itemId
        ),
      };
    case 'REMOVE_EDUCATION':
      return {
        ...state,
        education: state.education.filter((item) => item.id !== action.itemId),
      };
    case 'REMOVE_LANGUAGE':
      return {
        ...state,
        languages: state.languages.filter((item) => item.id !== action.itemId),
      };
    case 'REMOVE_SKILL':
      return {
        ...state,
        skills: state.skills.filter((item) => item.id !== action.itemId),
      };
    case 'UPDATE_TEMPLATE':
      return defaultValues;

    case 'ERASE_ALL':
      return initialState;
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};
