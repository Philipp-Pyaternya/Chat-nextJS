import React, { useState } from 'react';
import SignInForm from 'components/Form/signIn';
import SignUpForm from 'components/Form/signUp';
import LeftSide from 'components/Form/leftSide';

function Auth() {
    const [toggleType, setToggleType] = useState(false);
    const toggleTypeHandler = () => setToggleType(!toggleType);

    return (
        <div className="flex w-full h-screen px-60 md:px-0">
            <LeftSide
                title="Welcome back"
                content="Please SignUp or SignIn."
                buttonHandler={toggleTypeHandler}
                buttonToggle={toggleType}
            />
            <div className="flex justify-center items-center w-full">
                {toggleType ? (
                    <SignInForm />
                ) : (
                    <SignUpForm toggleTypeHandler={toggleTypeHandler} />
                )}
            </div>
        </div>
    );
}

export default Auth;
