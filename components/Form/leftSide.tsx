import React from 'react';

export default function leftSide(props) {
    const { title, content, buttonHandler, buttonToggle } = props;
    return (
        <div className="w-7/12 h-screen p-3 hidden justify-center items-center bg-emerald-500 bg-figure lg:flex">
            <div className="text-center text-white">
                <h1 className="text-5xl font-bold drop-shadow-lg">{title}</h1>
                <p className="my-8 text-lg drop-shadow-lg whitespace-pre">
                    {content}
                </p>
                {buttonHandler && (
                    <button
                        onClick={buttonHandler}
                        className="p-5 px-24 rounded-full drop-shadow-lg text-white font-bold border-2 border-white hover:bg-white hover:text-emerald-500 mt-5"
                    >
                        SIGN {buttonToggle ? 'UP' : 'IN'}
                    </button>
                )}
            </div>
        </div>
    );
}
