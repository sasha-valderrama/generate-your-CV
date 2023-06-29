import { nanoid } from 'nanoid';

export const exampleUser = {
  firstName: 'Sasha',
  lastName: 'Valderrama',
  jobPosition: 'Jr. Frontend Developer',
  picture: ' ',
  phone: '+49 153 737813373',
  city: 'Berlin',
  country: 'Germany',
  address: 'Berlin, Germany',
  email: 'sa.joselyn@posteo.de',
  url: 'github.com/sasha-valderrama',
  about:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus. ',
};

export const newValues = {
  profile: {
    firstName: '',
    lastName: '',
    jobPosition: '',
    picture: '',
    phone: '',
    address: '',
    email: '',
    url: '',
  },
  about: { description: '' },
  experiences: [
    {
      id: nanoid(5),
      from: '',
      to: '',
      position: '',
      company: '',
      location: '',
      description: '',
    },
    {
      id: nanoid(5),
      from: '',
      to: '',
      position: '',
      company: '',
      location: '',
      description: '',
    },
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
  languages: [
    { id: nanoid(5), langName: '', proficiency: '' },
    { id: nanoid(5), langName: '', proficiency: '' },
    {
      id: nanoid(5),
      langName: '',
      proficiency: '',
    },
  ],
  skills: [
    { id: nanoid(5), name: '' },
    { id: nanoid(5), name: '' },
    { id: nanoid(5), name: '' },
    { id: nanoid(5), name: '' },
    { id: nanoid(5), name: '' },
  ],
};

export const initialState = {
  profile: newValues.profile,
  about: newValues.about,
  experiences: newValues.experiences,
  languages: newValues.languages,
  skills: newValues.skills,
};

// export const defaultValues = {
//   profile: {
//     firstName: 'Sasha',
//     lastName: 'Valderrama',
//     jobPosition: 'Jr. Frontend Developer',
//     picture: '',
//     phone: '+49 1572 0562626',
//     address: 'City, Germany',
//     email: 'sa.valde@posteo.de',
//     url: 'Passionate about accessible Web and user friendly interfaces. I love using brand new technologies and solving bugs on a daily basis.',
//   },
//   about: {
//     description: '',
//   },
//   experience: [
//     {
//       id: '',
//       position: '',
//       company: ' ',
//       from: '',
//       to: '',
//     },
//     {
//       id: '',
//       position: '',
//       company: ' ',
//       from: '',
//       to: '',
//     },
//   ],
// languages: [
//     { id: nanoid(), langName: 'English', proficiency: 'Native' },
//     { id: nanoid(), langName: 'Spanish', proficiency: 'Bilingual Proficiency' },
//     {
//       id: nanoid(),
//       langName: 'German',
//       proficiency: 'Full Professional Proficiency',
//     },
//   ],
// skills: [
//   { id: nanoid(), skill: 'Project management' },
//   { id: nanoid(), skill: 'Problem-solving' },
//   { id: nanoid(), skill: 'Design' },
//   { id: nanoid(), skill: 'Mobile development' },
//   { id: nanoid(), skill: 'Data analysis' },
// ],
// };
