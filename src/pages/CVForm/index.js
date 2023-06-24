import React from 'react';
import { OuterContainer } from '../../components/form/OuterContainer';
import { MainForm } from '../../components/form/MainForm';
import Heading from '../../components/form/heading';

const user = {
  firstName: 'John',
  lastName: 'Doe',
  jobPosition: 'Creative Designer',
  contactInfo: [
    {
      id: '125',
      address: {
        city: 'Berlin',
        country: 'Germany',
        street: 'Afrikanische Str.',
        number: 81,
      },
    },
    {
      id: '245',
      phone: {
        prefix: '+15',
        number: '153 737813373',
      },
    },
    {
      id: '555',
      email: 'sa.joselyn@posteo.de',
    },
    {
      id: '875',
      website: 'sdkmfd.com',
    },
  ],
};

export default function CVform() {
  return (
    <OuterContainer>
      <MainForm>
        <Heading
          firstName={user.firstName}
          lastName={user.lastName}
          jobPosition={user.jobPosition}
        ></Heading>
        <div>dfdsfdsfdsfdf</div>
        <div>dfdsfdsfdsfdf</div>
        <div>dfdsfdsfdsfdf</div>
        <div>dfdsfdsfdsfdf</div>
        <div>dfdsfdsfdsfdf</div>
        <div>dfdsfdsfdsfdf</div>
        <div>dfdsfdsfdsfdf</div>
        <div>dfdsfdsfdsfdf</div>
        <div>dfdsfdsfdsfdf</div>
        <div>dfdsfdsfdsfdf</div>
      </MainForm>
    </OuterContainer>
  );
}
