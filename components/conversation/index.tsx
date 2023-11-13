import React from 'react';
import Search from './search';
import Item from './item';

export default function Сonversation(props) {
    const { conversationData } = props;

    const conversationItem = conversationData.map((item) => {
        return <Item sender={item?.sender} />;
    });

    return (
        <div className="w-full lg:w-2/4 border-r-2 border-gray-200">
            <Search />
            <div className="overflow-y-scroll h-192">{conversationItem}</div>
        </div>
    );
}
