import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function Input() {
    const [isClear, setIsClear] = useState(false);
    const inputHandler = ({ target }) =>
        target.value?.length > 0 ? setIsClear(true) : setIsClear(false);

    console.log('isClear', isClear);
    return (
        <div className="border-t-2 border-gray-200 flex fixed bottom-0 w-4/5 bg-white h-20">
            <input
                className="w-full p-5 focus:outline-none"
                type="text"
                placeholder="Type your message here.."
                onChange={inputHandler}
            />

            <button
                className={`h-16 w-16 md:h-12 md:w-12 items-center justify-center animate-pulse flex`}
            >
                <FontAwesomeIcon
                    className="w-10 h-10 md:w-8 md:h-8 text-green-500"
                    icon={faPaperPlane}
                />
            </button>
        </div>
    );
}
export default Input;
