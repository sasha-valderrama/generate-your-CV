import React, { useReducer } from 'react';
import { OuterContainer } from './OuterContainer';
import { MainForm } from './MainForm';
import Heading from './heading';

const reducer = (state, action) => {};

const initialArg = {
  firstName: null,
  lastName: null,
  jobPosition: null,
  profilePic: null,
  phone: null,
  address: null,
  email: null,
  url: null,
};

export default function Form() {
  const [state, dispatcher] = useReducer(reducer, initialArg);
  return (
    <OuterContainer>
      <MainForm>
        <Heading
          firstName={initialArg.firstName}
          lastName={initialArg.lastName}
          jobPosition={initialArg.jobPosition}
          phone={initialArg.phone}
          email={initialArg.email}
          address={initialArg.address}
          url={initialArg.url}
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
