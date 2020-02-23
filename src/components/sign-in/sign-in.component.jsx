import React from 'react';

import FormInput from '../form-input/form-input.component';

import { SigninContainer } from './sign-in.styles';

const Signin = () => (
  <SigninContainer>
    <FormInput
      name="email"
      type="email"
      label="email"
      value="email"
      required
    />
  </SigninContainer>
);

export default Signin;
