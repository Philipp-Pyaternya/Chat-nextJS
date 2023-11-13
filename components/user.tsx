import React from 'react';
import Image from 'next/image';

function User(props) {
    const { sender } = props;

    return (
        <div className="flex">
            <div className="flex items-center">
                <Image
                    className="rounded-full w-12 h-12 mr-4 "
                    src={sender?.avatar}
                    width={50}
                    height={50}
                    alt="Picture of the author"
                />
            </div>
            <div>
                <h3 className="text-gray-600">
                    {sender?.firstName + ' ' + sender?.lastName}
                </h3>
                <p className="text-green-500">Online</p>
            </div>
        </div>
    );
}
export default User;
