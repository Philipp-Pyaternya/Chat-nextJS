import React from 'react';

function Message(props) {
    const { message, createdAt } = props;
    return (
        <div className="bg-slate-100 p-5 m-5 rounded-t rounded-bl">
            <p className="text-gray-800">{message}</p>
            <p className="text-gray-500">{createdAt}</p>
        </div>
    );
}

export default Message;
