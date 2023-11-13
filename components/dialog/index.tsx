import React from 'react';
import Message from './message';
import Input from './input';

function Dialog(props) {
    const { conversationData } = props;

    console.log('conversationData', conversationData);

    const messages = conversationData.map((item) => {
        return <Message message={item?.message} createdAt={item?.createdAt} />;
    });

    return (
        <div className="w-full hidden lg:block">
            <div className="overflow-y-scroll h-192">
                {/* <Message />
                <Message />
                <Message />
                <Message />
                <Message /> */}
                {messages}
            </div>
            <Input />
        </div>
    );
}
export default Dialog;
