import { nanoid } from 'nanoid';

export const defaultValues = {
  profile: {
    firstName: 'Alexander Maria',
    lastName: 'Gonzalez',
    jobPosition: 'Senior Java Software Developer',
    phone: '+49 1587 578 13 41',
    address: 'Berlin,Germany',
    email: 'alexander_gonzalez@gmail.com',
    url: 'github.com/sasha-valderrama',
  },
  about: {
    description:
      "Passionate about accessible Web and user friendly interfaces. I love using brand new technologies and solving bugs on a daily basis. I'm now looking for a new challenge on my career either on back- or Frontend.",
  },
  experiences: [
    {
      id: nanoid(5),
      from: '2022',
      to: 'today',
      position: 'Java Software Engineer',
      company: 'ING Germany',
      location: 'Berlin, Germany',
      description:
        'We are developing Java based applications. Main focus on teh backend',
    },
    {
      id: nanoid(5),
      from: '2017',
      to: '2020',
      position: 'Software Engineer',
      company: 'Menlo Park',
      location: 'CA, USA',
      description:
        'We developed tools for increasing the accessibility of own main mobile products',
    },
  ],
  education: [
    {
      id: nanoid(5),
      from: '2018',
      to: '2020',
      university: 'Uniwersytet Jagielloński w Krakowie',
      degree: 'Master of Science',
      subject: 'Software engineering and virtual reality',
    },
    {
      id: nanoid(5),
      from: '2012',
      to: '2016',
      university: 'University of Southern California',
      degree: 'Bachelor of Science',
      subject: 'Computer Science',
    },
  ],
  languages: [
    { id: nanoid(5), langName: 'Spanish', proficiency: 'Native' },
    {
      id: nanoid(5),
      langName: 'English',
      proficiency: 'Full Professional Proficiency',
    },
    {
      id: nanoid(5),
      langName: 'German',
      proficiency: 'Bilingual Proficiency',
    },
  ],
  skills: [
    { id: nanoid(5), name: 'Project management' },
    { id: nanoid(5), name: 'Problem-solving' },
    { id: nanoid(5), name: 'Design' },
    { id: nanoid(5), name: 'Mobile development' },
    { id: nanoid(5), name: 'Data analysis' },
  ],
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
  ],
  education: [
    {
      id: nanoid(5),
      from: '',
      to: '',
      university: '',
      degree: '',
      subject: '',
    },
    {
      id: nanoid(5),
      from: '',
      to: '',
      university: '',
      degree: '',
      subject: '',
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
  education: newValues.education,
  languages: newValues.languages,
  skills: newValues.skills,
};
