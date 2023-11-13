import React from 'react';
import Image from 'next/image';
import User from 'components/user';

function Item(props) {
    const { sender } = props;
    return (
        <div className="p-4 flex justify-between items-end hover:bg-slate-100 cursor-pointer">
            <User sender={sender} />
            <div>
                <p className="text-gray-500">23:00</p>
            </div>
        </div>
    );
}
export default Item;
