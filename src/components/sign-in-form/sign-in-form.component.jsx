import React, { useState } from 'react';

import { signInWithGoogle } from '../../firebase/firebase.urils';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignInFormContainer } from './sign-in-form.styles';

const SignInForm = () => {

  const [userCredentials, setCredentials] = useState({email: '', password: ''});

  const { email, password } = userCredentials;

  const handleChange = event => {
      const {name, value} = event.target;

      setCredentials({...userCredentials, [name]: value})
  }

    return (
      <SignInFormContainer>
        <FormInput
          name="email"
          type="email"
          label="email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="password"
          value={password}
          onChange={handleChange}
          required
        />
        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
          Google
        </CustomButton>
      </SignInFormContainer>
    );
};

export default SignInForm;