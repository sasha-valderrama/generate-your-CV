import React, { useReducer } from 'react';
import { OuterContainer } from './OuterContainer';
import { MainForm } from './MainForm';
import Heading from './heading';
import { initialArg } from '../../data';
import { reducer } from '../../util/reducer';

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialArg);

  const handleChangeProfile = (e) => {
    console.log(state);
    dispatch({
      type: 'UPDATE_PROFILE',
      payload: { key: e.target.name, value: e.target.value },
    });
    console.log(state);
  };

  return (
    <OuterContainer>
      <MainForm>
        <Heading
          firstName={state.firstName}
          lastName={state.lastName}
          jobPosition={state.jobPosition}
          phone={state.phone}
          email={state.email}
          address={state.address}
          url={state.url}
          onChangeProfile={handleChangeProfile}
        ></Heading>
      </MainForm>
    </OuterContainer>
  );
}
