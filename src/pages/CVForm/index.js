import React from 'react';
import { OuterContainer } from '../../components/form/OuterContainer';
import { MainForm } from '../../components/form/MainForm';
import Heading from '../../components/form/heading';
import { Edit, Example, Preview } from '../../components/ui/Buttons';

const user = {
  firstName: 'Max',
  lastName: 'Mustermann',
  jobPosition: 'Creative Designer',
  contactInfo: {
    address: {
      city: 'Berlin',
      country: 'Germany',
      street: 'Afrikanische Str.',
      number: 81,
    },
    phone: {
      prefix: '+15',
      number: '153 737813373',
    },
    email: 'sa.joselyn@posteo.de',
    website: 'sdkmfd@posteo.com',
  },
};

export default function CVform() {
  return (
    <OuterContainer>
      <Edit right>EDIT</Edit>
      <Preview>PREVIEW</Preview>
      <Example right>EXAMPLE</Example>
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
