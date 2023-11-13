import React from 'react';
import RestoreForm from '../components/Form/restore';
import LeftSide from 'components/Form/leftSide';

function Restore() {
    return (
        <div className="flex w-full h-screen px-60 md:px-0">
            <LeftSide
                title="To restore"
                content={`Please provide a valid email address. \nYou will be sent an email with instructions`}
            />
            <div className="flex justify-center items-center w-full">
                <RestoreForm />
            </div>
        </div>
    );
}

export default Restore;
