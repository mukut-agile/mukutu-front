import React from 'react';

import CustomButton from '../custombutton/custombutton-component';

import { SignupContainer } from './sign-up.styles';

const Signup = () => {

    return(
        <SignupContainer>
            <h1> 登録 </h1>
            <CustomButton type="button" isGoogleSignIn>
                Google
            </CustomButton>
        </SignupContainer>
    )
};

export default Signup;
