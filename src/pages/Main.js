import styled from '@emotion/styled';
import React, { useReducer, useState } from 'react';
import { Edit } from '../components/ui/Edit';
import { exampleUser } from '../data';
import Form from '../components/form';

const reducer = (state, action) => {};

const initialArg = {
  firstName: '',
  lastName: '',
  jobPosition: '',
  profilePic: '',
  contactInfo: {
    address: {
      city: '',
      country: '',
    },
    phone: {
      prefix: '',
      number: '',
    },
    email: '',
    website: '',
  },
};

export default function Main() {
  const [example, setExample] = useState(exampleUser);
  const [state, dispatch] = useReducer(reducer, initialArg);
  console.log(example);

  // const handleEdit = (e) => {
  //   console.log(e);
  // };

  return (
    <MainContainer>
      <Edit left>EXAMPLE</Edit>
      <Form firstName={exampleUser.firstName}></Form>
      <Edit right>UPDATE</Edit>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  color: ${(props) => props.theme.colors.quaternary};
  background-color: ${(props) => props.theme.colors.neutral};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
`;
