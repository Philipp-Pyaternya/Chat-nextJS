import { useEffect } from 'react';
import { useActions } from 'src/hooks/useEntity';

function IdentityWorker() {
    const { getIdentity } = useActions('Identity');

    useEffect(() => {
        getIdentity();
    }, [pageProps]);

    return <div />;
}
export default IdentityWorker;
