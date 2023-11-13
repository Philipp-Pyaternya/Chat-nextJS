import React from 'react';

function FormError(props) {
    const { message } = props;
    return (
        <div className="text-red-500 text-sm absolute bottom-0 -mb-6 pl-2">
            {message}
        </div>
    );
}
export default FormError;
