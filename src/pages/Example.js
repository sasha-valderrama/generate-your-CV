import React from 'react';
import { OuterContainer } from '../components/form/OuterContainer';
import { MainForm } from '../components/form/MainForm';
import Heading from '../components/form/heading';
import { exampleUser } from '../data';

export default function Example() {
  return (
    <OuterContainer>
      <MainForm>
        <Heading
          firstName={exampleUser.firstName}
          lastName={exampleUser.lastName}
          jobPosition={exampleUser.jobPosition}
          phone={exampleUser.phone}
          email={exampleUser.email}
          address={exampleUser.address}
          url={exampleUser.url}
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
        <div>dfdsfdsfdsfdf</div>
        <div>dfdsfdsfdsfdf</div>
        <div>dfdsfdsfdsfdf</div>
        <div>dfdsfdsfdsfdf</div>
      </MainForm>
    </OuterContainer>
  );
}
