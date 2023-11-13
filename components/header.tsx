import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import User from './user';

function Header(props) {
    const { conversationData } = props;

    return (
        <div className="w-full flex bg-white border-b-2 border-gray-200 fixed top-0 ">
            <div className="w-full md:w-2/4 flex items-center pl-4">
                <h1 className="text-gray-600 text-4xl font-medium p-3 ">
                    Conversations
                </h1>
            </div>
            <div className="w-full xl:flex hidden">
                <div className="p-3 flex justify-between items-center w-full">
                    <div className="flex">
                        <div className="flex items-center">
                            <FontAwesomeIcon
                                className="w-12 h-12 mr-3 text-slate-300 hover:bg-slate-100 cursor-pointer"
                                icon={faArrowLeft}
                            />
                            <User sender={conversationData[0]?.sender} />
                        </div>
                    </div>
                    <div>
                        <FontAwesomeIcon
                            className="w-10 h-10 text-slate-300"
                            icon={faInfo}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;
